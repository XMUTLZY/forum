package sch.forum.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sch.forum.domain.TopicEntity;

@Repository
public interface TopicRepository extends JpaRepository<TopicEntity, Integer> {
}
