Vue.component('picture-grid', {
    template : 
    `
    <div>
        <!-- 그리드를 이용해서 화면 출력 -->
        <v-row>
            <v-col cols="12" sm="6" v-for="(picture, index) in pictures">
                <v-card class="up">
                    <v-img :src="picture.src" aspect-ratio="2.0"></v-img>
                    <v-card-title>{{picture.title}}</v-card-title>
                    <v-card-actions>
                        <h3>{{picture.count}}</h3>
                        <v-spacer></v-spacer>
                        <v-btn @click="countUp(index)">추천</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
    `,
    data : function(){
        return {
            pictures : [
                {
                    count : 0,
                    title : '해운대',
                    src : './img/1.jpg'
                },
                {
                    count : 0,
                    title : '바다 도시 야경',
                    src : './img/2.jpg'
                },
                {
                    count : 0,
                    title : '광안대교',
                    src : './img/3.jpg'
                },
                {
                    count : 0,
                    title : '해운대 인어동상',
                    src : './img/4.jpg'
                }
            ],
        }
    },
    methods : {
        countUp : function(i) {
            this.pictures[i].count++;
            // Vue 인스턴스에 값 전달 - this.recommend에 넣을 title값
            this.$emit('recommend-title', this.pictures[i].title )
        }
    }
})