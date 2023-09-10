import {
  BadRequestException,
  type CallHandler,
  type ExecutionContext,
  type NestInterceptor,
} from '@nestjs/common';
import { catchError, type Observable } from 'rxjs';
import { TypeORMError } from 'typeorm';

export class ErrorInterceptor<T extends Error> implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      catchError((err: T) => {
        if (err instanceof TypeORMError) {
          throw new BadRequestException(err.message);
        }
        throw new Error(err.message);
      }),
    );
  }
}
