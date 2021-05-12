package sch.forum.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sch.forum.domain.TopicCommentEntity;

import java.util.List;

@Repository
public interface TopicCommentRepository extends JpaRepository<TopicCommentEntity, Integer> {
    List<TopicCommentEntity> findAllByTopicIdAndStatus(Integer topicId, Integer status);
    void deleteByTopicId(Integer topicId);
}
