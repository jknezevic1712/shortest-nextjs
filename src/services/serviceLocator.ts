import LinksRepository from '../repositories/links/linksRepository';
import LinksService from './linksService';

export type AvailableServices = {
	LinksService: LinksService;
};

export type AvailableRepositories = {
	LinksRepository: LinksRepository;
};

export class ServiceLocator {
	private static _serviceCache: Record<string, any>;
	private static _repositoryCache: Record<string, any>;

	static {
		console.log('Assigning caches');
		ServiceLocator._serviceCache = {};
		ServiceLocator._repositoryCache = {};
	}

	static getService<K extends keyof AvailableServices>(
		name: K
	): AvailableServices[K] | undefined {
		const service = this._serviceCache[name];

		if (!!service) {
			console.log(`${name} service is cached! Returning the cached version.`);
			return service as AvailableServices[K];
		}

		console.log(`Creating and caching ${name} service...`);
		if (name === LinksService.name) {
			const linksRepository = this.getRepository('LinksRepository')!;
			const linksService = new LinksService(linksRepository);

			this._serviceCache[name] = linksService;
			return linksService;
		}
	}

	private static getRepository<K extends keyof AvailableRepositories>(
		name: K
	): AvailableRepositories[K] | undefined {
		const repository = this._repositoryCache[name];

		if (!!repository) {
			console.log(
				`${name} repository is cached! Returning the cached version.`
			);
			return repository as AvailableRepositories[K];
		}

		console.log(`Creating and caching ${name} repository...`);
		if (name === LinksRepository.name) {
			// ? Note: the place to instantiate different repositories if needed
			const linksRepository = new LinksRepository();

			this._repositoryCache[name] = linksRepository;
			return linksRepository;
		}
	}
}
