import { LinksRepository } from '../repositories/links/linksRepository';

import { LinksService } from './linksService';

export type ServiceMap = {
	LinksService: LinksService;
};

export type RepositoryMap = {
	LinksRepository: LinksRepository;
};

export class ServiceLocator {
	private static _serviceCache: Partial<Record<string, any>> = {};
	private static _repositoryCache: Partial<Record<string, any>> = {};

	private static _serviceFactory: {
		[T in keyof ServiceMap]: () => ServiceMap[T];
	} = {
		LinksService: () => {
			const linksRepository =
				ServiceLocator.getOrCreateRepository('LinksRepository');

			return new LinksService(linksRepository);
		},
	};

	private static _repositoryFactory: {
		[K in keyof RepositoryMap]: () => RepositoryMap[K];
	} = {
		LinksRepository: () => new LinksRepository(),
	};

	private static getOrCreateRepository<T extends keyof RepositoryMap>(
		name: T
	): RepositoryMap[T] {
		let repository = this._repositoryCache[name];

		if (repository) {
			console.log(
				`${name} repository is cached! Returning the cached version.`
			);
			return repository;
		}

		console.log(`Creating ${name} repository...`);
		repository = this._repositoryFactory[name]();

		console.log(`Caching ${name} repository...`);
		this._repositoryCache[name] = repository;

		return repository;
	}

	static getService<T extends keyof ServiceMap>(name: T): ServiceMap[T] {
		const service = this._serviceCache[name];

		if (service) {
			console.log(`${name} service is cached! Returning the cached version.`);
			return service;
		}

		console.log(`Creating ${name} service...`);
		const createdService = this._serviceFactory[name]();

		console.log(`Caching ${name} service...`);
		this._serviceCache[name] = createdService;

		return createdService;
	}
}
