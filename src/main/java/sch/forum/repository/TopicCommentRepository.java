package sch.forum.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sch.forum.domain.TopicCommentEntity;

@Repository
public interface TopicCommentRepository extends JpaRepository<TopicCommentEntity, Integer> {
}
