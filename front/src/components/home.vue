<template>
    <div class="home">
        <div class="sendPost">
            <img src="../assets/default_user.png" alt="Default user" id="user_picture">
            <div class="allThings" v-if="isAdd == true">
                <input type="text" placeholder="Quoi de neuf ?" id="sendMessage" v-model="message">
                <div class="things">
                    <input class="form-control" type="file" accept=".jpg,.jpeg,.jpng" ref="picture" @change="selectFile()">
                    <img src="../assets/send_post.png" alt="sendPost" class="send" @click="createPost()">
                </div>
            </div>
        </div>
        <div id="separateur">
            <h2>Publication récentes</h2>
        </div>
        <div class="postContent">
            <div class="post" v-for="post in posts" :key="post.id">
                <div class="user_info">
                    <div class="info">
                        <div class="user">
                            <img src="../assets/default_user.png" alt="" class="user_picture">                        
                            <h3 class="user_pseudo">{{ post.userId }}</h3>
                        </div>
                        <div class="modify" v-if="isAdmin() || isPostOwner(post.userId)">
                            <button id="modify" @click="DisplayModifyPost(post.id)">Modifier</button>
                            <button id="delete" @click="deletePost(post.id)">Supprimer</button>
                        </div>
                        <div id="modifyPost" v-if="isModify == true && post.id == currentPost">
                            <input type="text" placeholder="" id="modifyMessage" v-model="message">
                            <button id="submitModify" @click="modifyPost()">Modifier</button>
                            <button id="cancelModify" @click="cancelModifyPost()">Annuler</button>
                        </div>
                    </div>
                    <div class="post_info">
                        <div class="post_picture" v-if="post.picture">
                            <img :src="post.picture">
                        </div>
                        <div class="post_title">
                            {{ post.message }}
                        </div>
                        <div class="post_like">
                            <p v-if="post.usersLiked && hasLiked(post.usersLiked)" @click="likePost(post.id, 0)">Annuler le like</p>
                            <p v-else @click="likePost(post.id, 1)">Like</p>
                            <div v-if="post.usersLiked" class="numberOfLikes">
                              {{ JSON.parse(post.usersLiked).length }}
                            </div>
                            <div v-else>
                              0
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import axios from 'axios';


export default {
    name: 'homeWorld',
    props: {
        msg: String
    },
    data() {
        return {
          posts: [],
          message: null,
          picture: null,
          likes: null,
          currentPost: null,
          isAdd: true,
          isModify: false,
          isConnected: true
        }
    },
    async mounted() {
        if (!this.checkConnected()) {
          this.$router.push({ path: '/login' })
        }else {
          await this.displayPost()
        }
    },
    methods: {
      selectFile() {
        this.picture = this.$refs.picture.files[0]
      },
      likePost(postID, action) {

        const userId = localStorage.getItem('userId')

        const payload = {
          userId: userId,
          isLikeOrUnlike: action
        }

        const urlLike = 'http://localhost:3002/api/post/' + postID + '/like'
        const header = { headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')}}

        axios.post(urlLike, payload, header)
          .then(() => {
            this.displayPost()
          })
          .catch((error) => {
            console.log(error);
          })
      },
      cancelModifyPost(postID){
          this.currentPost = postID
          this.isAdd = true
          this.isModify = false
          this.message = ''
      },
      deletePost(postID) {

          this.currentPost = postID

          const header = { headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')}}

          const urlDetelte = 'http://localhost:3002/api/post/' + this.currentPost

          axios.delete(urlDetelte, header)
            .then(() => {
                this.displayPost()
            })
            .catch((error) => {
                console.log(error);
            })
      },
      modifyPost() {
        const urlModify = 'http://localhost:3002/api/post/' + this.currentPost
        const payload = {
            message: this.message
        }
        const header = { headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')}}

        axios.put(urlModify, payload, header)
          .then(() => {
              this.displayPost()
              this.isAdd = true
              this.isModify = false
              this.message = ''

          })
          .catch((error) => {
              console.log(error);
          })
      },
      DisplayModifyPost(postID) {
          this.currentPost = postID
          this.isAdd = false
          this.isModify = true
          this.message = ''

      },
      checkConnected() {
          return this.$store.getters.getConnected
      },
      isAdmin(){
          return this.$store.getters.getRole
      },
      isPostOwner(postUserID) {
        const userId = localStorage.getItem('userId')
        return postUserID === userId
      },
      getUserId(){
          return localStorage.getItem('userId')
      },
      displayPost() {
          const urlPost = 'http://localhost:3002/api/post'
          const header = { headers: {
                  Authorization: 'Bearer ' + localStorage.getItem('token')}}


          axios.get(urlPost, header)
            .then((response) => {
              this.posts = response.data
            })
            .catch((error) => {
              console.log(error);
            })
      },
      hasLiked(arrayUsersLiked){
        const userId = localStorage.getItem('userId')
        return JSON.parse(arrayUsersLiked) == userId
      },
      createPost() {
          const urlPost = 'http://localhost:3002/api/post'
          const header = { headers: {
                  Authorization: 'Bearer ' + localStorage.getItem('token'),
                  'Content-Type': 'multipart/form-data'
          }}

          const formData = new FormData()
          formData.append('image', this.picture)

          const publication = {
            message: this.message,
            userId: this.getUserId(),
            likes: this.likes
          }
          formData.append('publication', JSON.stringify(publication))

          axios.post(urlPost, formData, header )
            .then(() => {
              this.message = ''
              this.displayPost()
            })
            .catch((error) => {
                console.log(error);
            })
      }
    }
}

</script>


<style scoped lang="scss">

body {
  color: #000;
}

.numberOfLikes {
  color: #000;
}
.post {
    background-color: white;
    margin-top: 40px;
    padding: 10px 0px;
    width: 80%;
    margin: auto;
    margin-top: 15px;
    border-radius: 5px;

    .post_info {
      width: 80%;
      margin: auto;
      margin-top: 15px;

        .post_title {
          background-color: gray;
          border-radius: 5px;
        }

        .post_like {
          color: #000;
          text-align: left;
          display: flex;
          align-items: center;
          margin-top: 10px;
          gap: 10px;
            p {
              color: black;
              margin-bottom: 0px;
              margin-top: 0px;
              cursor: pointer;
            }

          span {
            color: #000;
          }
        }
    }

    .user_info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 10px;
      padding-bottom: 10px;

        .user {
            display: flex;
            width: 100%;
            justify-content: space-between;
        }

        #modifyPost {
            display: flex;
            margin-top: 10px;
            gap: 10px;

            input {
                margin-right: 10px;
            }
        }
        
        .modify {
            margin-top: 15px;
            display: flex;
            justify-content: space-between;
            width: 55%;

            #modify {
                background-color: orangered;
                color: white;
                border-radius: 5px;
                padding: 5px 20px;
                border: 1px solid black;
                cursor: pointer;
            }

            #delete {
                background-color: red;
                color: white;
                border-radius: 5px;
                padding: 5px 20px;
                border: 1px solid black;
                cursor: pointer;
            }
        }

        .info {
            display: flex;
            flex-direction: column;
            width: 95%;
            justify-content: space-between;
            border-bottom: 1px solid black;
            padding-bottom: 10px;
        }

        .user_picture {
            width: 60px;
            border-radius: 100%;
            border: 1.5px solid black;
        }

        .user_pseudo {
            font-size: 13px;
            color: black;
        }
    }
}

#separateur {
    background-color: white;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    
    h2 {
        color: black;
        font-size: 14px;
        width: 30%;
    }
}

.sendPost {
    display: flex;
    align-items: center;
    width: 90%;
    margin: auto;
    justify-content: space-between;
    padding-bottom: 30px;

    #user_picture {
        width: 100px;
        border-radius: 50%;
        border: 1.5px solid black;

    }

    .allThings {

        input {
            width: 300px;
            height: 25px;
        }

        .things {
            width: 100%;
            margin-top: 10px;
            display: flex;
            justify-content: right;

            .form-control{
                width: 70%;
            }

            .send {
                width: 20px;
                cursor: pointer;
                margin-left: 6px;
            }
        }
    }
}

@media (max-width: 500px) {
  #separateur {
    h2 {
      width: 45%;
    }
  }

  .sendPost {
    .allThings {
      input {
        width: 180px;
        height: 25px;
      }
    }
  }
}

</style>
