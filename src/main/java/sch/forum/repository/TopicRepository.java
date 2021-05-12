package sch.forum.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sch.forum.domain.TopicEntity;
import sch.forum.http.vo.Topic;

import java.util.List;

@Repository
public interface TopicRepository extends JpaRepository<TopicEntity, Integer> {
    Page<TopicEntity> findAllByUserId(Pageable pageable, Integer userId);
    int countByUserId(Integer userId);

    List<TopicEntity> findAllByGameIdAndVerifyStatus(Integer gameId, Integer verifyStatus);
    List<TopicEntity> findAllByVerifyStatusAndIsRecommend(Integer verifyStatus, Integer isRecommend);
    List<TopicEntity> findAllByVerifyStatusOrderByCreateTime(Integer verifyStatus);
}
