package sch.forum.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sch.forum.domain.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    UserEntity findDistinctByMobileAndPasswordAndStatus(String mobile, String password, Integer status);
}
