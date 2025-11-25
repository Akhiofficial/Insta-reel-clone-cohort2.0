const reelsData = [
  {
    username: "akhilesh",
    likeCount: 23800,
    commentCount: 253,
    isLiked: true,
    caption: "This is reel",
    shareCount: 206,
    userProfileImage:
      "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png",
    video: "./reels/v1.mp4",
    isFollowed: false,
  },
  {
    username: "natureshots",
    likeCount: 15420,
    commentCount: 98,
    isLiked: false,
    caption: "Sunset vibes 🌇 #travel",
    shareCount: 64,
    userProfileImage:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    video: "./reels/v2.mp4",
    isFollowed: true,
  },
  {
    username: "streetlens",
    likeCount: 18760,
    commentCount: 142,
    isLiked: true,
    caption: "City lights at night ✨ #streetphotography",
    shareCount: 73,
    userProfileImage:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    video: "./reels/v3.mp4",
    isFollowed: true,
  },
  {
    username: "fitwithme",
    likeCount: 9200,
    commentCount: 45,
    isLiked: false,
    caption: "Morning workout grind 💪 #fitness",
    shareCount: 31,
    userProfileImage:
      "https://images.pexels.com/photos/3763877/pexels-photo-3763877.jpeg",
    video: "./reels/v4.mp4",
    isFollowed: false,
  },
  {
    username: "fooddiaries",
    likeCount: 13250,
    commentCount: 76,
    isLiked: true,
    caption: "Crispy tacos recipe 🌮 #homemade",
    shareCount: 52,
    userProfileImage:
      "https://images.pexels.com/photos/277394/pexels-photo-277394.jpeg",
    video: "./reels/v5.mp4",
    isFollowed: true,
  },
  {
    username: "codecraft",
    likeCount: 8400,
    commentCount: 61,
    isLiked: true,
    caption: "Building an Insta Reel clone in CSS 😎 #webdev",
    shareCount: 29,
    userProfileImage:
      "https://images.pexels.com/photos/3184455/pexels-photo-3184455.jpeg",
    video: "./reels/v6.mp4",
    isFollowed: false,
  },
  {
    username: "petplanet",
    likeCount: 21050,
    commentCount: 203,
    isLiked: false,
    caption: "Puppy’s first walk 🐶 #cute",
    shareCount: 118,
    userProfileImage:
      "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
    video: "./reels/v7.mp4",
    isFollowed: true,
  },
  {
    username: "artbyana",
    likeCount: 7350,
    commentCount: 34,
    isLiked: true,
    caption: "Ink flow timelapse 🖋️ #calligraphy",
    shareCount: 22,
    userProfileImage:
      "https://images.pexels.com/photos/1850020/pexels-photo-1850020.jpeg",
    video: "./reels/v2.mp4",
    isFollowed: true,
  },
];

sum = " ";

reelsData.forEach(function (elems) {
  sum =
    sum +
    `<div class="reel">
            <video src="${elems.video}" autoplay loop></video>
            <div class="bottom">
              <div class="user">
                <img
                  src="${elems.userProfileImage}"
                  alt=""
                />
                <h4>@${elems.username}</h4>
                <button id="follow-btn">${
                  elems.isFollowed ? "Unfollow" : "Follow"
                }</button>
              </div>
              <h3>${elems.caption}</h3>
            </div>

            <div class="right">
              <div class="like">
                <h4 class="like-icon">${
                  elems.isLiked
                    ? "<i class=' love ri-heart-fill'></i>"
                    : "<i class=' ri-heart-line'></i>"
                } </h4>
                <h6>${elems.likeCount}</h6>
              </div>
              <div class="comment">
                <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                <h6>${elems.commentCount}</h6>
              </div>

              <div class="share">
                <h4 class="share-icon">
                  <i class="ri-share-forward-fill"></i>
                </h4>
                <h6>${elems.shareCount}</h6>
              </div>
              <div class="menu">
                <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
              </div>
            </div>
          </div>`;
});

console.log(sum);

document.querySelector(".allreels").innerHTML = sum;
