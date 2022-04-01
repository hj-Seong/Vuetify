Vue.component('appbar-component',{
    template : 
    `
    <div>
        <v-app-bar app dark color="primary">
            <v-app-bar-nav-icon @click="ndrawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title>
                부산관광안내
            </v-toolbar-title>
        </v-app-bar>

        <!-- 내비게이션 서랍시작-->
        <v-navigation-drawer v-model="ndrawer" temporary absolute> 
            <v-toolbar flat>
                <v-list>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-icon class="grey white--text">mdi-account</v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>즐거운 부산</v-list-item-title>
                            <v-list-item-subtitle>다이나믹부산</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-toolbar>
            <v-divider></v-divider>

            <!-- 내비게이션 서랍의 메뉴-->
            <v-list>
                <v-list-item href="#" v-for="(menu, index) in menuList" :key="index">
                    <v-list-item-action>
                        <v-icon>{{menu.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{menu.title}}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

        </v-navigation-drawer>
        <!-- 내비게이션 서랍 끝-->
    </div>
    `,
    data : function() {
        return {
            ndrawer : false,
            menuList : [
                {
                    title : '메인페이지',
                    icon : 'mdi-card-bulleted-outline',
                },
                {
                    title : '관광지 소개',
                    icon : 'mdi-content-paste',
                },
                {
                    title : '추천명소',
                    icon : 'mdi-check',
                }
            ],
        }
    }
})