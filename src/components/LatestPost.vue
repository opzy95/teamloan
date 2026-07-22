<template>
   <div class="latest-posts-section">
    <h2 class="section-title">Latest Post</h2>

    <div class="posts-grid">
      <article v-for="post in posts" :key="post.id" class="post-card">
        <h3 class="post-title">
          {{ post.title }}
        </h3>
        <p class="post-excerpt">{{ post.excerpt }}</p>

        <div class="post-meta">
          <div class="author">
            <div class="avatar" :style="{ backgroundImage: `url(${post.avatar})` }" />
            <div class="author-info">
              <span class="name">{{ post.author }}</span>
              <span class="date">{{ post.date }}</span>
            </div>
          </div>
        </div>
      </article>
    </div>

    <button class="view-more-btn">VIEW MORE</button>
  </div>
</template>

<script>
export default {
  name: 'LatestPosts',

  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Get Best Advertiser In Your Side",
          excerpt: "The StarTribune doesn't just hand out the responsibility of informing their community's citizenry on a daily basis to just anyone...",
          author: "May Cain",
          date: "19th March, 2019",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
        },
        {
          id: 2,
          title: "Internet Advertising Trends You",
          excerpt: "Nope, I had to interview for this job. And I tell you, I was magnificent, so much so that, as you know, I got the position...",
          author: "May Cain",
          date: "19th March, 2019",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
        },
        {
          id: 3,
          title: "Improve Your Business Cards",
          excerpt: "Upon completion of the interview the gentleman that was to give me my first opportunity at financial freedom...",
          author: "May Cain",
          date: "19th March, 2019",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
        }
      ]
    }
  }
}
</script>
   

<style  scoped>
.latest-posts-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 2.2rem;
  text-align: center;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.post-card {
  background: white;
  border-radius: 10px;
  padding: 1.8rem 1.6rem;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.07);
  transition: all 0.2s ease;
  border: 1px solid #f0f0f0;
}

.post-card:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}

.post-title {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 1rem 0;
  line-height: 3.35;
  /* color: #8cc218; */
}

.post-title:hover{
    text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
  text-decoration-color: #8cc218;
  
}

.post-excerpt {
  font-size: 1.03rem;
  line-height: 1.58;
  color: #1a2b3c; 
  margin: 0 0 1.6rem 0;
}

.post-meta {
  display: flex;
  align-items: center;
}

.author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.name {
  font-weight: 600;
  color: #8cc218; 
  font-size: 1.05rem;
}

.date {
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.2rem;
}

.view-more-btn {
  display: block;
  margin: 0 auto;
  padding: 0.95rem 3rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: white;
  background: #8cc218;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.view-more-btn:hover {
  background: #81af1c;
  transform: translateY(-2px);
}

@media (max-width: 480px) {
  .posts-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 1.7rem;
  }
}

</style>