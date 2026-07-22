<template>
  <Navbar/>
  <div class="blog-wrapper">

    <div class="blog-left">

      <div class="blog-card">
        <img src="../assets/Blog-img/blog-1.jpg" alt="Blog 1" class="blog-img" />
        <div class="blog-card-body">
          <h2>Get Best Advertiser In Your Side Pocket</h2>
          <div class="blog-meta">
            <span>19th March, 2019</span>
            <span>John Smith</span>
          </div>
          <p>One of my favourite things I like to watch is the bloopers and outtakes that are shown of mistakes made during</p>
          <button class="read-btn">CONTINUE READING</button>
        </div>
      </div>

      <div class="blog-card">
        <img src="../assets/Blog-img/blog-2.jpg" alt="Blog 2" class="blog-img" />
        <div class="blog-card-body">
          <h2>Internet Advertising Trends You Won't Be Disappointed</h2>
          <div class="blog-meta">
            <span>19th March, 2019</span>
            <span>John Smith</span>
          </div>
          <p>More than 1 billion people frequent the Internet daily. Americans alone spent $69 billion buying things online in</p>
          <button class="read-btn">CONTINUE READING</button>
        </div>
      </div>

      <div class="blog-card">
        <img src="../assets/Blog-img/blog-3.jpg" alt="Blog 3" class="blog-img" />
        <div class="blog-card-body">
          <h2>Freelance Design Tricks How To Get Away With Murder</h2>
          <div class="blog-meta">
            <span >19th March, 2019</span>
            <span>John Smith</span>
          </div>
          <p>More than 1 billion people frequent the Internet daily. Americans alone spent $69 billion buying things online in</p>
          <button class="read-btn">CONTINUE READING</button>
        </div>
      </div>

      <div class="blog-card">
        <img src="../assets/Blog-img/blog-4.jpg" alt="Blog 4" class="blog-img" />
        <div class="blog-card-body">
          <h2>Advertise No Matter If You Are Big Or Small</h2>
          <div class="blog-meta">
            <span>19th March, 2019</span>
            <span>John Smith</span>
          </div>
          <p>More than 1 billion people frequent the Internet daily. Americans alone spent $69 billion buying things online in</p>
          <button class="read-btn">CONTINUE READING</button>
        </div>
      </div>

      <div class="pagination">
        <a href="#">Pre</a>
        <a href="#" class="active">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">Next</a>
      </div>

    </div>

    <div class="blog-right">

      <div class="sidebar-section">
        <h4>Search</h4>
        <div class="search-box">
          <input type="text" placeholder="searching.." />
          <button>
          <Icon icon="mdi:search"/>
          </button>
        </div>
      </div>

      <div class="sidebar-section">
        <h4>Categories</h4>
        <ul class="category-list">
          <li><a href="#">Finance</a><span>18</span></li>
          <li><a href="#">Business</a><span>20</span></li>
          <li><a href="#">Loan</a><span>07</span></li>
          <li><a href="#">Consulting</a><span>22</span></li>
          <li><a href="#">Credit</a><span>19</span></li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h4>Recent Post</h4>
        <a href="#" class="recent-post">
          <img src="../assets/Blog-img/br-1.jpg" alt="Promote With Postcards" />
          <div>
            <h6>Promote With Postcards</h6>
            <p>19th March, 2019</p>
          </div>
        </a>
        <a href="#" class="recent-post">
          <img src="../assets/Blog-img/br-2.jpg" alt="Bidding Directories" />
          <div>
            <h6>Bidding Directories</h6>
            <p>19th March, 2019</p>
          </div>
        </a>
        <a href="#" class="recent-post">
          <img src="../assets/Blog-img/br-3.jpg" alt="Kook 2 Director Add Url" />
          <div>
            <h6>Kook 2 Director Add Url</h6>
            <p>19th March, 2019</p>
          </div>
        </a>
      </div>

      <!-- Popular Tags -->
      <div class="sidebar-section">
        <h4>Popular Tag</h4>
        <div class="tags-grid">
          <span class="tag">BUSINESS</span>
          <span class="tag">MARKETING</span>
          <span class="tag">PAYMENT</span>
          <span class="tag">TRAVEL</span>
          <span class="tag">FINANCE</span>
          <span class="tag">VIDEOS</span>
          <span class="tag">IDEAS</span>
          <span class="tag">UNIQUE</span>
          <span class="tag">MUSIC</span>
          <span class="tag">KEY</span>
        </div>
      </div>

      <!-- Follow Us -->
      <div class="sidebar-section">
        <h4>Follow Us</h4>
        <div class="socials">
          <a href="#" class="social-icon fb"><Icon icon="mdi:facebook"/></a>
          <a href="#" class="social-icon tw"><Icon icon="mdi:twitter"/></a>
          <a href="#" class="social-icon ig"><Icon icon="mdi:linkedin"/></a>
          <a href="#" class="social-icon yt"><Icon icon="mdi:youtube"/></a>
        </div>
      </div>

    </div>
  </div>
  <Footer/>
</template>

<script>
import { Icon } from '@iconify/vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}



</script>

<style scoped>
.blog-wrapper {
  display: flex;
  gap: 30px;
  padding: 60px 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.blog-left {
  flex: 2;
}

.blog-right {
  flex: 1;
  min-width: 280px;
}

.blog-card {
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #eee;
}

.blog-img {
  width: 100%;
  object-fit: cover;
  display: block;
}

.blog-card-body {
  padding: 20px 0 0;
}

.blog-card-body h2 {
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 10px;
  color: #1a1a2e;
}

.blog-meta {
  display: flex;
  gap: 20px;
  font-size: 13px;
  color: #888;
  margin-bottom: 12px;
}

.blog-card-body p {
  font-size: 14px;
  color: #666;
  line-height: 1.7;
  margin-bottom: 16px;
}

.read-btn {
  background-color: #88c417;
  color: black;
  border: none;
  padding: 10px 24px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  cursor: pointer;
  border-radius: 3px;
  transition: background 0.2s;
}

.read-btn:hover {
  background:#6d9e13;
}

/* Pagination */
.pagination {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}

.pagination a {
  padding: 8px 14px;
  border: 1px solid #ddd;
  color: #555;
  text-decoration: none;
  font-size: 13px;
  border-radius: 3px;
}

.pagination a.active,
.pagination a:hover {
  background:#88c417;
  color: #fff;
  border-color:#88c417;
}
.blog-right{
  padding: 10px;
    border: 1px solid rgba(128, 128, 128, 0.251);
    height: fit-content;
}

/* Sidebar */
.sidebar-section {
  margin-bottom: 36px;
 
}

.sidebar-section h4 {
  font-size: 16px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 16px;
  padding-bottom: 10px;
}

/* Search */
.search-box {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 3px;
  overflow: hidden;
}

.search-box input {
  flex: 1;
  padding: 10px 12px;
  border: none;
  outline: none;
  font-size: 14px;
}

.search-box button {
  padding: 0 14px;
  background:#88c417;
  color: white;
  border: none;
  cursor: pointer;
}

/* Categories */
.category-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-list li {
  display: flex;
  justify-content: space-between;
  padding: 9px 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 14px;
}

.category-list li a {
  color: #555;
  text-decoration: none;
}

.category-list li a:hover {
  color: #1a73e8;
}

.category-list li span {
  color: #999;
}

/* Recent Posts */
.recent-post {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  align-items: center;
  text-decoration: none;
}

.recent-post img {
  width: 70px;
  height: 60px;
  object-fit: cover;
  border-radius: 3px;
  background: #eee;
  flex-shrink: 0;
}

.recent-post h6 {
  font-size: 13px;
  font-weight: 600;
  margin: 0 0 4px;
  color: #333;
}

.recent-post p {
  font-size: 12px;
  color: #999;
  margin: 0;
}

/* Tags */
.tags-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  padding: 8px 16px;
  border: 1px solid #d0d0d0;
  border-radius: 3px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.07em;
  color: #555;
  cursor: pointer;
  transition: all 0.2s;
}

.tag:hover {
  background:#88c417;
  color: #fff;
  border-color:#88c417;
}

/* Socials */
.socials {
  display: flex;
  gap: 10px;
}

.social-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 13px;
  font-weight: bold;
  text-decoration: none;
}

.fb { background: #3b5998; }
.tw { background: #1da1f2; }
.ig { background: #0077b5; }
.yt { background: #ff0000; }


@media (max-width: 900px) {
  .blog-wrapper {
    flex-direction: column;
    padding: 40px 24px;
    gap: 20px;
  }

  .blog-right {
    min-width: unset;
    width: 100%;
  }

  .tags-grid {
    gap: 6px;
  }
}
@media (max-width: 600px) {
  .blog-wrapper {
    padding: 24px 16px;
  }

  .blog-card-body h2 {
    font-size: 18px;
  }

  .blog-meta {
    flex-direction: column;
    gap: 4px;
  }

  .blog-img {
    height: 200px;
  }

  .read-btn {
    width: 100%;
    text-align: center;
    padding: 12px;
  }

  .pagination {
    flex-wrap: wrap;
    justify-content: center;
  }

  .socials {
    gap: 8px;
  }

  .social-icon {
    width: 40px;
    height: 40px;
    font-size: 14px;
  }

  .recent-post img {
    width: 60px;
    height: 50px;
  }

  .sidebar-section h4 {
    font-size: 15px;
  }

  .tag {
    font-size: 10px;
    padding: 6px 12px;
  }
  .tag{
    font-size: 10px;
    padding: 6px 12px;
  }
}

</style>