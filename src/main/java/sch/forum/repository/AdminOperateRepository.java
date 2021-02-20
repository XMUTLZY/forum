package sch.forum.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sch.forum.domain.AdminOperateEntity;
import java.util.List;

@Repository
public interface AdminOperateRepository extends JpaRepository<AdminOperateEntity, Integer> {
    List<AdminOperateEntity> findAllByUserNameLikeOrderByAdminIdDesc(String userName);
    List<AdminOperateEntity> findAllByOrderByAdminIdDesc();
}
