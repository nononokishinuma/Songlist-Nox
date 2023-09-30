let config = {
    Name: "诺莺Nox的歌单",
    
    BiliLiveRoomID: "https://live.bilibili.com/282208",
    
    NetEaseMusicId: "https://music.163.com/#/user/home?id=279917746",
    YoutubeId: "https://www.youtube.com/@nox-virtuareal9563",
    Footer: "Copyright © 2022 秋葉",

    Cursor: true,

    LanguageCategories: ["华语", "英语", "日语", "粤语", "法语"],
    RemarkCategories: ["流行", "弹唱"],

    BannerTitle: "诺莺Nox的歌单",
    BannerContent: [
        `诺莺Nox`,
     ],

    CustomButtons: [
        {
            link: "https://box.n3ko.cc/_/NahNahNox",
            name: "匿名提问箱",
            image: "/assets/icon/tapechat.png"
        },        
        {
            link: "https://m.bilibili.com/topic-detail?topic_id=39232&bsource=topic.share",
            name: "FanArt话题",
            image: "/assets/icon/tapechat.png"
        },
        {
            link: "https://weibo.com/p/1005057581432974",
            name: "微博",
            image: "/assets/icon/tapechat.png"
        }
    ]
}


module.exports = {
    config
}