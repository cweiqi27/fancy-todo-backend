import type { Observable } from 'rxjs';
import type { User } from 'src/users/entities/user.entity';
import type { DeleteResult, UpdateResult } from 'typeorm';

export interface BaseService<T> {
  /**
   * Creates an entity and returns an observable.
   */
  create: (dto: unknown) => Observable<T>;

  /**
   * Updates the entiy.
   */
  update: (id: string, dto: unknown) => Observable<UpdateResult>;

  /**
   * Permanently removes the entiy.
   */
  remove: (id: string) => Observable<DeleteResult>;

  /**
   * Soft removing an entity by updating 'deleted_at' and 'deleted_by' fields.
   */
  softRemove: (
    id: string,
    deletedBy: string | Observable<User>,
  ) => Observable<T>;
}
