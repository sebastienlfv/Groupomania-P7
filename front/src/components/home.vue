<template>
    <div class="home">
        <div class="sendPost">
            <!-- ajout de l'image de l'utilisateur connecter -->
            <img src="../assets/default_user.png" alt="Default user" id="user_picture">
            <div class="allThings">
                <input type="text" placeholder="Quoi de neuf ?" id="sendMessage">
                <div class="things">
                    <img src="../assets/image.png" alt="addImage" class="addImage">
                    <img src="../assets/send_post.png" alt="sendPost" class="send">
                </div>
            </div>
        </div>
        <div id="separateur">
            <h2>Publication récentes</h2>
        </div>
        <div class="post">
            <div class="user_info">
                <div class="info">
                    <!-- IMAGE DE PROFILE DE L'UTILISATEUR -->
                    <img src="../assets/default_user.png" alt="" class="user_picture">
                    <!-- PSEUDO DE L'UTILISATEUR -->
                    <h3 class="user_pseudo">Pseudo</h3>
                </div>
            </div>
            <div class="post_info">
                <!-- IMAGE DE L'UTILISATEUR -->
                <img src="../assets/image test/image.png" alt="">
                <div class="post_title">
                    <!-- TITRE DE LA PUBLICATION -->
                    <h3 class="title">Titre de la publication</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'homeWorld',
    props: {
        msg: String
    }
}

</script>

<style scoped lang="scss">

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
    }

    .user_info {
        display: flex;
        width: 95%;
        justify-content: space-between;
        margin-left: 10px;
        border-bottom: 1px solid black;
        padding-bottom: 10px;

        .info {
            display: flex;
            width: 30%;
            justify-content: space-between;
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

            .addImage {
                width: 20px;
                cursor: pointer;
            }

            .send {
                width: 20px;
                cursor: pointer;
                margin-left: 6px;
            }
        }
    }
}

</style>
