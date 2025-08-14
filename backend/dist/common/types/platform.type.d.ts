import { Response as ExpressResponse } from 'express';
import { FastifyReply } from 'fastify';
export type Platform = ExpressResponse | FastifyReply;
