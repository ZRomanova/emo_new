(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbody { \n    margin: 0;\n    background: WHITE;\n    overflow: scroll;\n    word-wrap: break-word;\n}\n.form {\n    left: 10%;\n    width: 40%;\n    top: 50px;\n    bottom: 50px;   \n    display: inline-block; \n    position: relative;\n    margin-top: 1%;\n }\n.pNotAdmin {\n     font-size: 0.8cm;\n     font-family: Arial, sans-serif;\n    }\n.entrance {\n\theight: 1.4cm;\n\tfont-size: 1.2cm; \n    margin-left: 20px;\n    resize: none;\n    overflow: hidden;   \n}\n.entrance_password {\n    margin-top: 45px;\n}\n#bottom_entrance {\n    text-align: center;\n    margin-top: 25px; \n    width: 60%;\n    padding: 5px;\n    display: block;\n    border: 4px solid red;\n    border-radius: 5px;\n    margin-left: 20px;\n}\n#textarea_entrance {\n    margin-top: -10px; \n    width: 70%;    \n}\n#error_bottom {\n     text-align: center;\n     border: 2px solid black;\n     margin-left: 35%;\n     margin-right: 35%;\n}\n#error_text {\n     text-align: center;\n     margin-top: 15%;\n}\n.red {color: red;}\n.tc {\n    background: white; \n    color: black;\n    font-family: Arial, sans-serif;\n}\n.white {\n      background: white; \n}\na {\n    text-decoration: none;\n    border-width: 0;\n}\np, img, a:visited, a:active, a:hover {\n    text-decoration: none;\n}\n.black-cursor, body, html {\n     cursor: url('/uploads/images/cursorBlack.cur'), default;\n     font-family: Arial, sans-serif;\n}\n.green-cursor\n{\n     cursor: url('/uploads/images/cursor.cur'), pointer;\n}\n.text-cursor {\n    cursor: url('/uploads/images/cursorText.cur') 16 16, text;\n}\n#emoPicture {\n     z-index: 2;\n     position: fixed;\n     width: 30%;\n     max-width: 50%;\n     height: auto;\n     top: 10%;\n     right: 100px;\n}\n#emoText {\n    position: fixed;\n    bottom: 10%;\n    width: 30%;\n    right: 100px;\n    display: block;\n    text-align: center;\n    font-size: 2cm;\n    z-index: 3;\n}\nbutton, button:active, button:focus,\naudio, video {\n    outline: none !important;\n}\n.nav {\n    position: fixed;\n    top: 0;\n    left: 0; \n    right: 0;\n    height: 55px;\n    padding-bottom: 10px;\n    padding-left: 3px;\n    padding-right: 3px;\n    z-index: 2;\n}\n.manage-active {\n    border: 3px solid #fff;\n}\n.nav-admin-li-right {\n    float: right;\n    margin-right:3px; /*Добавляем отступ у пунктов меню*/  \n    margin-left:3px;\n}\n.content {\n    padding-bottom: 20px;\n}\n#nav-mobile {\n    list-style: none; /*убираем маркеры списка*/\n    margin: 0; /*убираем отступы*/\n    padding-left: 0; /*убираем отступы*/\n    margin-top:25px; /*делаем отступ сверху*/\n  }\n.nav-admin, #submit, .new_user_button, .inst-edit {\n    text-decoration: none; /*убираем подчеркивание текста ссылок*/\n    color: #fff; /*меняем цвет ссылок*/\n    padding:10px; /*добавляем отступ*/\n    font-family: arial; /*меняем шрифт*/\n    border-radius:4px; /*добавляем скругление*/\n    transition: all 0.3s 0.01s ease; /*делаем плавный переход*/\n    text-align: center;\n}\n.nav-admin-li {\n    float:left; /*Размещаем список горизонтально для реализации меню*/\n    margin-right:3px; /*Добавляем отступ у пунктов меню*/  \n    margin-left:3px;\n}\n.content {\n    position: relative;\n    top: 80px;\n    padding: 0, 0, 20px, 0;\n    z-index: 1;\n}\n.user {\n    position: relative;\n    border-width: 3px;\n    border-style: solid;\n    border-radius: 3px;\n    height: auto;\n    width: 600px;\n    margin: auto;\n    margin-bottom: 10px;\n    padding-bottom: 10px;\n}\n.avatarAdmin {\n    width: 200px;\n    height: auto;\n    display: inline-block;\n}\n.user_title {\n    margin-left: 10px;\n    margin-top: 5px;\n}\n.div_user_info {\n    display: inline-block;\n    padding: 3px;\n}\np {\n    margin: 0;\n}\n.button {\n    margin-bottom: 10px;\n    margin-top: 5px;\n}\n.user_filtr {\n    position: fixed;\n    top: 80px;\n    left: 40px;\n}\n.in_user_filtr, .in_new_user {\n    margin-top: 12px;\n}\n#add_user, #add_institution, #add_picture {\n    position: fixed;\n    right: 30px;\n    top: 100px;\n}\n#add_folder {\n    position: fixed;\n    right: 30px;\n    top: 150px;\n}\n#back_picture {\n    position: fixed;\n    right: 30px;\n    top: 200px;\n}\n#submit {\n    top: 15px;\n    position: relative;\n    bottom: 15px;\n}\n#new_user, #add_new_picture, #edit_picture_or_folder, #edit_user {\n    border-width: 3px;\n    border-style: solid;\n    border-radius: 3px;\n    margin: auto;\n    width: 700px;\n    height: auto;\n    padding: 15px;\n    padding-right: 25px;\n}\n.edit-avatar {\n    border-width: 2px;\n    border-style: solid;\n    width: 280px;\n    height: 280px;\n    border-radius: 3px;\n    display: inline-block;\n    float: right;\n}\n.inst-edit {\n    display: inline-block;\n    margin-top: -10px;\n    margin-left: 5px;\n}\n.institution {\n    width: 550px;\n    margin: auto;\n    border-width: 3px;\n    border-style: solid;\n    border-radius: 3px;\n    padding: 20px;\n    margin-bottom: 10px;\n}\n.inst-span {\n    width: 300px;\n    height: 20px;\n}\n.pictures {\n    position: relative;\n    height: 100%;\n    width: 700px;\n    margin: auto;\n    overflow: auto;\n}\n.picture {\n    border-width: 3px;\n    border-style: solid;\n    border-radius: 3px; \n    height: auto;\n    width: 300px;\n    padding-bottom: 10px;\n    margin: 10px;\n    display: inline-block;\n}\n.picta-pictures {\n    max-height: 128px;\n    max-width: 128px; \n    display: block;  \n    margin: auto; \n}\n.picta_one {\n    max-height: 258px;\n    max-width: 258px; \n    display: block; \n    margin: auto;\n}\n.p_text {\n    margin-top: 8px;\n    text-align: center;\n    width: 100%;\n}\n.p_border {\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 3px;\n    display: inline-block;\n    height: 130px;\n    width: 130px;\n    margin-left: 10px;\n    margin-top: 10px;\n}\n.p_border_one {\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 3px;\n    display: block;\n    height: 260px;\n    width: 260px;\n    margin: auto;\n    margin-top: 10px;\n}\n.edit-picture {\n    margin-top: 20px;\n    margin-left: 10px;\n    margin-bottom: 10px;\n    display: inline-block;\n}\n#new_picture_select {\n    width: 200px;\n}\n.now_img {\n    width: 200px;\n    height: auto;\n}\n.inst-right {\n    float: right\n}\n.form_picture_button {\n    margin-right: 5px;\n}\n.friends {\n    width: 80%;\n    height: 100%;\n    overflow: auto;\n    border-spacing: 50px;\n    display: inline-block;\n  }\n.box-friend {\n      display: inline-block;\n      width: 33%;\n      margin-bottom: 2.5%;\n      margin-top: 2.5%;\n      z-index: 1;\n  }\n.menu {\n      width: 19.5%;\n      height: 100%;\n      overflow: auto;\n      display: inline-block;\n      border-left-width: 3px;\n      border-left-style: solid;\n      z-index: 3;\n  }\n.friendAvatar {\n      margin-top: 5%;\n      margin: auto;\n      width: 70%;\n      height: auto;\n      border-style: solid;\n      border-radius: 10px;\n      border-width: 3px;\n      display: block;\n  }\n.friendName {\n      display: block;\n      margin: auto;\n      margin-top: 2.5%;\n      border-style: solid;\n      border-radius: 10px;\n      border-width: 3px;\n      width: 70%;\n      height: auto;\n      font-size: 0.7cm;\n      text-align: center;\n      padding-top: 0.2cm;\n      padding-bottom: 0.2cm;\n  }\n.menuIMG {\n    margin-top: 10px;\n    margin-left: 5%;\n    width: 80%;\n    border-style: solid;\n    border-radius: 10px;\n    border-width: 3px;\n  }\n.menuIMG:after {\n    padding-top: 100%;\n  }\n.myPhoto {\n    margin-top: 10px;\n    margin-left: 5%;\n    width: 80%;\n  }\n.exit-friends { \n    border-style: solid;\n    border-radius: 10px;\n    border-width: 3px;\n    margin-top: 10px;\n    margin-left: 5%;\n    width: 80%;\n    height: auto;\n    font-size: 0.7cm;\n    text-align: center;\n    padding-top: 0.1cm;\n    padding-bottom: 0.1cm;\n    margin-bottom: 3px;\n}\n.btn {\n  border-style: solid;\n  border-radius: 10px;\n  border-width: 3px;\n  font-size: 0.85cm;\n  text-align: center;\n  padding-top: 0.1cm;\n  padding-bottom: 0.1cm;\n}\n.button-friends {\n      height: 2cm;      \n  }\n#seach {\n      background: url('/uploads/images/lupa.png'); \n      background-size: 100% 100%;\n  }\n.letter {\n      position: relative;\n      height: 3rem;\n      width: 6rem;\n      background-image: url('/uploads/images/letter.png'); \n      background-size: 100% 100%;\n      display: inline-block;\n      margin-top: -3rem;\n      float: left;\n      left: 10%;\n      border: 3px solid red;\n      border-radius: 7.5px;\n  }\n.online {\n      position: relative;\n      height: 3rem;\n      width: 6rem; \n      display: inline-block;\n      float: right;\n      right: 10%;\n      margin-top: -3rem;\n  }\n.inchat {\n    background-size: 100% 100%;\n    background-image: url('/uploads/images/eye.png'); \n  }\n.notincat {\n    background-size: 100% 100%;\n    background-image: url('/uploads/images/computer.png');\n  }\n.letterandnoonline{\n       margin-bottom: -1.5cm;\n  }\n#online_me {\n    position: relative;\n    height: 1.3cm;\n    width: 2.6cm;\n    background-image: url('/uploads/images/computer.png'); \n    background-size: 100% 100%;\n    display: block;\n    bottom: 5px;\n    float: right;\n    left: 3px;\n    margin-top: -1.3cm;\n}\n.birthday {\n  position: relative;\n  margin-left: 2rem;\n  bottom: 1rem;\n  margin-bottom: -4rem;\n  height: 4rem;\n  width: 4rem;\n  background-size: 100% 100%;\n  background-image: url('/uploads/images/present.png');\n  z-index: 2;\n}\n.chat { \n  width: 33%; \n  height: 100%;    \n  display: inline-block;\n  overflow: auto;\n  position: relative;\n}\n.library {\n  position: relative;\n  width: 67%; \n  height: 100%;    \n  display: inline-block;\n  overflow: auto;\n}\n.all {\n  border-left-width: 3px;\n  border-left-style: solid;\n  min-height: 100%;\n  overflow: hidden;\n  font-family: Arial, sans-serif;\n}\n.picta {\n  width: 100%;\n  border-style: ridge;\n}\n.pict{ \n  width: 100%;\n}\n.pictaandtext {\n  width: 27%;     \n  height: auto;\n  display: inline-block;\n  margin-left: 10%;\n  margin-top: 3%;\n  margin-bottom: 3%;   \n  vertical-align: top;\n}\n.pictatext {\n    display: block;\n    border-style: solid;\n    border-radius: 10px;\n    border-width: 3px;\n    width: 100%;\n    height: auto;\n    text-align: center;\n    position: relative;\n    margin-top: 1%;\n    padding-top: 0.2cm;\n    padding-bottom: 0.1cm;\n  }\nimg.pict {\n    border-width: 3px; \n    border-style: solid;\n    border-radius: 10px;\n  }\n.exit { \n    height: 2cm;\n    width: 2cm;\n    bottom: 2%;\n    background-image: url('/uploads/images/cross.png'); \n    background-size: 100% 100%;\n  }\n.chat-menu {\n    width: 2cm;\n    float: right;\n    height: auto;\n  }\n.menu-icon {\n    height: 2cm;\n    width: 2cm;\n    margin-top: 15px;\n  }\n#header {\n    width: 100%;\n    height: 70px;\n    margin: 0; \n    position: absolute;\n    top: 0;\n    z-index: 2;\n    border-bottom-width: 3px;\n    border-bottom-style: solid;\n  }\n.avatar {\n      width: 66px;\n      height: 66px;\n      position: absolute;\n      top: 2px;\n      z-index: 4;\n  }\n#friend {left: 2px;}\n#me {right: 2px;}\n#chat {\n      width: 33%;\n      height: 60px;\n      font-size: 1cm;\n      margin: 0; \n      position: fixed;\n      bottom: 0;\n  }\n.text {\n      width: 75%;\n      height: 53px;\n      font-size: 0.9cm;\n      position: absolute;\n      bottom: 0;\n      resize: none;\n      overflow: auto;\n  }\n#footer_letter {\n      position: absolute;\n      height: 53px;\n      width: 23%;\n      right: 2px;\n      background-image: url('/uploads/images/letter.png'); \n      background-size: 100% 100%;\n      display: inline-block;\n  }\n.folder { \n    background-image: url('/uploads/images/folder.png');\n    background-size: 100% 100%; \n    border: 0;  \n    display: block;\n    height: 100%;\n  }\n.downloads {\n       margin-left: 20%;\n       margin-bottom: 8%;\n       margin-top: 32%;\n       width: 60%;\n       position: relative;\n  }\n.downloads-picture {\n    max-width: 100%;\n    max-height: 100%;\n    margin: auto;\n  }\n.libraryName {\n      display: block;\n      border-style: solid;\n      border-radius: 10px;\n      border-width: 3px;\n      width: 100%;\n      height: auto;\n      text-align: center;\n      position: relative;\n      padding-top: 0.2cm;\n      padding-bottom: 0.1cm;\n  }\n.box {\n      display: inline-block;\n      width: 49%;\n      height: auto;\n      margin-bottom: 15px;\n      margin-top: 15px;\n  }\n.tablo, .tablo_msg, .tablo_uv, .tablo_pict {\n    position: fixed;\n    height: 80%;\n    width: 60%;\n    top: 10%;\n    left: 20%;\n    background: #FFFFFF;\n    z-index: 2;\n    border: 4px solid red;\n    border-radius: 12px;\n    vertical-align: baseline;\n    z-index: 5;\n   }\n.vtablo { \n    font-size: 1.2cm;\n    text-align: center;\n    vertical-align: middle;\n    margin-top: 2%;\n  }\n.ontablo {\n     position: relative;\n     width: 18%;\n     display: inline-block;\n     height: 40%;\n     padding: 1%;\n     overflow-y: auto;\n     margin-top: 8%;\n   }\n#ontablo_uv { \n    max-height: 90%;\n    height: auto;\n    width: auto;\n    overflow: hidden;\n    margin-top: 3%;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    max-width: 90%;\n  }\n.ontablo_vote {\n    max-height: 70%;\n    height: auto;\n    width: auto;\n    overflow: hidden;\n    margin-top: 1%;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    max-width: 70%;\n  }\n#ontablo_text {display: table-cell;}\n#strelka, #strelka_msg {\n    background: url('/uploads/images/strelka.png');\n    background-size: 100% 100%; \n    height: 20%;\n    margin-bottom: 5%;\n  }\n#musorka, #musorka_msg {\n    background: url('/uploads/images/musorka.png');\n    background-size: 100% 100%;\n    width: 10%;\n    margin: 5%;\n    height: 20%;\n  }\n#question, #question_msg {\n    background: url('/uploads/images/question.png');\n    background-size: 100% 100%; \n  }\n#avatar, #delete_msg, #delete_pict {\n    display: inline-block;\n    margin-top: 30px;\n    width: auto;\n    height: auto;\n    z-index: 7;\n    max-height: 100%;\n    max-width: 95%;\n    margin: auto;\n  }\n#delete_msg { \n       position: absolute;\n       width: 88%;\n       padding: 3%;\n       margin: auto;\n       margin-top: 10%;\n  }\n#deleteChatMusorka{\n    height: 2cm;\n    width: 2cm;\n    background-image: url('/uploads/images/musorka.png');\n    background-size: 100% 100%;\n    display: inline-block;  \n    position: relative;\n    margin-bottom: 2%;\n    margin-left: 3%;\n  }\n#cross, #cross_msg, #cross_uv, #cross_pict {\n      background-image: url('/uploads/images/cross.png');\n      background-size: 100% 100%;\n      height: 2cm;\n      width: 2cm;\n      display: inline-block;\n      bottom: 12%;\n      left: 22%;\n      position: fixed;\n  }\n#tick, #tick_msg, #tick_pict {\n    background-image: url('/uploads/images/tick.png');\n    background-size: 100% 100%;\n    height: 2cm;\n    width: 2.5cm;\n    display: inline-block;\n    position: fixed;\n    bottom: 12%;\n    right: 22%;\n  }\n#pause {\n    background-image: url('/uploads/images/stop.png');\n    background-size: 100% 100%;\n    height: 2cm;\n    width: 2cm;\n    display: inline-block;\n    position: fixed;\n    bottom: 12%;\n    left: 32%;\n  }\n#resume {\n    background-image: url('/uploads/images/start.png');\n    background-size: 100% 100%;\n    height: 2cm;\n    width: 2cm;\n    display: inline-block;\n    position: fixed;\n    bottom: 12%;\n    left: 32%;\n  }\n#send-vote {\n    background-image: url('/uploads/images/letter.png');\n    background-size: 100% 100%;\n    height: 2cm;\n    width: 4cm;\n    display: inline-block;\n    position: fixed;\n    bottom: 12%;\n    right: 32%;\n  }\n#letterSend {\n      position: absolute;\n      height: 45px;\n      width: 95px;\n      right: 5px;\n      top: 25px;\n      z-index: 3;\n      animation-name: send;\n      animation-duration: 4s;\n  }\n@keyframes send {\n      from {right: 0;}\n      to {right: 100%;}\n  }\n#letterGet {\n      position: absolute;\n      height: 45px;\n      width: 20%;\n      right: 5px;\n      top: 25px;\n      z-index: 3;\n      animation-name: get;\n      animation-duration: 4s;\n  }\n@keyframes get {\n      from {right: 100%;}\n      to {right: 0;}\n  }\n.picture-lidrary {\n      width: 200px;\n      height: auto;\n  }\n.delete, .delete_pict {\n    background: url('/uploads/images/musorka.png');\n    background-size: 100% 100%; \n    height: 40px;\n    width: 40px;\n    margin-top: 10px;\n    display: block;\n    float: right;\n   }\nspan.tc {background-color: transparent;}\n#div_submit {\n    right: 2%; \n    top: 4cm;\n    position: fixed;\n  }\n#div_tick, #div_cross {\n    margin-right: 10%;\n    width: 1.5cm;\n    height: 1.5cm;\n  }\n.backdrop {\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background: rgba(0, 0, 0, .4);\n    z-index: 4;\n}\n.light-1-bg {\n    background-color: #FEBDD3;\n}\n.middle-1-bg, .middle-1-bg-hover {\n    background-color: #D26F90;\n}\n.middle-1-bg-hover:hover {\n    background-color: #A53D60;\n}\n.dark-1-color {\n    color: #A53D60;\n}\n.dark-1-border {\n    border-color: #A53D60;\n}\n.light-2-bg {\n    background-color: #FDB666;\n}\n.middle-2-bg, .middle-2-bg-hover {\n    background-color: #D29754;\n}\n.middle-2-bg-hover:hover {\n    background-color: #A46721;\n}\n.dark-2-color {\n    color: #A46721;\n}\n.dark-2-border {\n    border-color: #A46721;\n}\n.light-3-bg {\n    background-color: #FFFF66;\n}\n.middle-3-bg, .middle-3-bg-hover {\n    background-color: #D3D354;\n}\n.middle-3-bg-hover:hover {\n    background-color: #A6A621;\n}\n.dark-3-color {\n    color: #A6A621;\n}\n.dark-3-border {\n    border-color: #A6A621;\n}\n.light-4-bg {\n    background-color: #A3FD5A;\n}\n.middle-4-bg, .middle-4-bg-hover {\n    background-color: #8BD250;\n}\n.middle-4-bg-hover:hover {\n    background-color: #5BA41D;\n}\n.dark-4-color {\n    color: #5BA41D;\n}\n.dark-4-border {\n    border-color: #5BA41D;\n}\n.light-5-bg {\n    background-color: #57E3F7;\n}\n.middle-5-bg, .middle-5-bg-hover {\n    background-color: #4FC0D0;\n}\n.middle-5-bg-hover:hover {\n    background-color: #1C90A1;\n}\n.dark-5-color {\n    color: #1C90A1;\n}\n.dark-5-border {\n    border-color: #1C90A1;\n}\n.light-6-bg {\n    background-color: #B59DD7;\n}\n.middle-6-bg, .middle-6-bg-hover {\n    background-color: #8F67C6;\n}\n.middle-6-bg-hover:hover {\n    background-color: #58338C;\n}\n.dark-6-color {\n    color: #58338C;\n}\n.dark-6-border {\n    border-color: #58338C;\n}\n.light-7-bg {\n    background-color: #CCCCCC;\n}\n.middle-7-bg, .middle-7-bg-hover {\n    background-color: #999999;\n}\n.middle-7-bg-hover:hover {\n    background-color: #737373;\n}\n.dark-7-color {\n    color: #737373;\n}\n.dark-7-border {\n    border-color: #737373;\n}\n.file-1 {\n    background-color: #FC2125;\n}\n.file-2 {\n    background-color: #29C732;\n}\n.file-3 {\n    background-color: #0A60FF;\n}\n.file-4 {\n    background-color: #FD8208;\n}\n.file-5 {\n    background-color: #FEC309;\n}\n.file-6 {\n    background-color: #90714C;\n}\n.file-7 {\n    background-color: #FB0D8F;\n}\n.file-8 {\n    background-color: #9D33D6;\n}\n.file-9 {\n    background-color: #453CCC;\n}\n.file-10 {\n    background-color: #7B7B81;\n}\n.file-11 {\n    background-color: #007B81;\n}\n.file-12 {\n    background-color: #678532;\n}", "",{"version":3,"sources":["styles.css","theme/style.css","theme/styles.css","theme/friends.css","theme/library.css","theme/colors.css"],"names":[],"mappings":"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","file":"styles.css","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n@import \"theme/style.css\";\n@import \"theme/styles.css\";\n@import \"theme/friends.css\";\n@import \"theme/library.css\";\n@import \"theme/colors.css\";","body { \n    margin: 0;\n    background: WHITE;\n    overflow: scroll;\n    word-wrap: break-word;\n}\n\n.form {\n    left: 10%;\n    width: 40%;\n    top: 50px;\n    bottom: 50px;   \n    display: inline-block; \n    position: relative;\n    margin-top: 1%;\n }\n\n .pNotAdmin {\n     font-size: 0.8cm;\n     font-family: Arial, sans-serif;\n    }\n \n.entrance {\n\theight: 1.4cm;\n\tfont-size: 1.2cm; \n    margin-left: 20px;\n    resize: none;\n    overflow: hidden;   \n}\n\n.entrance_password {\n    margin-top: 45px;\n}\n\n#bottom_entrance {\n    text-align: center;\n    margin-top: 25px; \n    width: 60%;\n    padding: 5px;\n    display: block;\n    border: 4px solid red;\n    border-radius: 5px;\n    margin-left: 20px;\n}\n\n#textarea_entrance {\n    margin-top: -10px; \n    width: 70%;    \n}\n\n#error_bottom {\n     text-align: center;\n     border: 2px solid black;\n     margin-left: 35%;\n     margin-right: 35%;\n}\n\n#error_text {\n     text-align: center;\n     margin-top: 15%;\n}\n\n.red {color: red;} \n\n.tc {\n    background: white; \n    color: black;\n    font-family: Arial, sans-serif;\n}\n\n.white {\n      background: white; \n}\n\na {\n    text-decoration: none;\n    border-width: 0;\n}\n\np, img, a:visited, a:active, a:hover {\n    text-decoration: none;\n}\n\n.black-cursor, body, html {\n     cursor: url('/uploads/images/cursorBlack.cur'), default;\n     font-family: Arial, sans-serif;\n}\n\n.green-cursor\n{\n     cursor: url('/uploads/images/cursor.cur'), pointer;\n}\n\n.text-cursor {\n    cursor: url('/uploads/images/cursorText.cur') 16 16, text;\n}\n\n#emoPicture {\n     z-index: 2;\n     position: fixed;\n     width: 30%;\n     max-width: 50%;\n     height: auto;\n     top: 10%;\n     right: 100px;\n}\n\n\n#emoText {\n    position: fixed;\n    bottom: 10%;\n    width: 30%;\n    right: 100px;\n    display: block;\n    text-align: center;\n    font-size: 2cm;\n    z-index: 3;\n}\nbutton, button:active, button:focus,\naudio, video {\n    outline: none !important;\n}",".nav {\n    position: fixed;\n    top: 0;\n    left: 0; \n    right: 0;\n    height: 55px;\n    padding-bottom: 10px;\n    padding-left: 3px;\n    padding-right: 3px;\n    z-index: 2;\n}\n.manage-active {\n    border: 3px solid #fff;\n}\n.nav-admin-li-right {\n    float: right;\n    margin-right:3px; /*Добавляем отступ у пунктов меню*/  \n    margin-left:3px;\n}\n.content {\n    padding-bottom: 20px;\n}\n#nav-mobile {\n    list-style: none; /*убираем маркеры списка*/\n    margin: 0; /*убираем отступы*/\n    padding-left: 0; /*убираем отступы*/\n    margin-top:25px; /*делаем отступ сверху*/\n  }\n.nav-admin, #submit, .new_user_button, .inst-edit {\n    text-decoration: none; /*убираем подчеркивание текста ссылок*/\n    color: #fff; /*меняем цвет ссылок*/\n    padding:10px; /*добавляем отступ*/\n    font-family: arial; /*меняем шрифт*/\n    border-radius:4px; /*добавляем скругление*/\n    transition: all 0.3s 0.01s ease; /*делаем плавный переход*/\n    text-align: center;\n}\n.nav-admin-li {\n    float:left; /*Размещаем список горизонтально для реализации меню*/\n    margin-right:3px; /*Добавляем отступ у пунктов меню*/  \n    margin-left:3px;\n}\n.content {\n    position: relative;\n    top: 80px;\n    padding: 0, 0, 20px, 0;\n    z-index: 1;\n}\n.user {\n    position: relative;\n    border-width: 3px;\n    border-style: solid;\n    border-radius: 3px;\n    height: auto;\n    width: 600px;\n    margin: auto;\n    margin-bottom: 10px;\n    padding-bottom: 10px;\n}\n.avatarAdmin {\n    width: 200px;\n    height: auto;\n    display: inline-block;\n}\n.user_title {\n    margin-left: 10px;\n    margin-top: 5px;\n}\n.div_user_info {\n    display: inline-block;\n    padding: 3px;\n}\np {\n    margin: 0;\n}\n.button {\n    margin-bottom: 10px;\n    margin-top: 5px;\n}\n.user_filtr {\n    position: fixed;\n    top: 80px;\n    left: 40px;\n}\n.in_user_filtr, .in_new_user {\n    margin-top: 12px;\n}\n#add_user, #add_institution, #add_picture {\n    position: fixed;\n    right: 30px;\n    top: 100px;\n}\n#add_folder {\n    position: fixed;\n    right: 30px;\n    top: 150px;\n}\n#back_picture {\n    position: fixed;\n    right: 30px;\n    top: 200px;\n}\n#submit {\n    top: 15px;\n    position: relative;\n    bottom: 15px;\n}\n#new_user, #add_new_picture, #edit_picture_or_folder, #edit_user {\n    border-width: 3px;\n    border-style: solid;\n    border-radius: 3px;\n    margin: auto;\n    width: 700px;\n    height: auto;\n    padding: 15px;\n    padding-right: 25px;\n}\n.edit-avatar {\n    border-width: 2px;\n    border-style: solid;\n    width: 280px;\n    height: 280px;\n    border-radius: 3px;\n    display: inline-block;\n    float: right;\n}\n.inst-edit {\n    display: inline-block;\n    margin-top: -10px;\n    margin-left: 5px;\n}\n.institution {\n    width: 550px;\n    margin: auto;\n    border-width: 3px;\n    border-style: solid;\n    border-radius: 3px;\n    padding: 20px;\n    margin-bottom: 10px;\n}\n.inst-span {\n    width: 300px;\n    height: 20px;\n}\n.pictures {\n    position: relative;\n    height: 100%;\n    width: 700px;\n    margin: auto;\n    overflow: auto;\n}\n.picture {\n    border-width: 3px;\n    border-style: solid;\n    border-radius: 3px; \n    height: auto;\n    width: 300px;\n    padding-bottom: 10px;\n    margin: 10px;\n    display: inline-block;\n}\n.picta-pictures {\n    max-height: 128px;\n    max-width: 128px; \n    display: block;  \n    margin: auto; \n}\n.picta_one {\n    max-height: 258px;\n    max-width: 258px; \n    display: block; \n    margin: auto;\n}\n.p_text {\n    margin-top: 8px;\n    text-align: center;\n    width: 100%;\n}\n.p_border {\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 3px;\n    display: inline-block;\n    height: 130px;\n    width: 130px;\n    margin-left: 10px;\n    margin-top: 10px;\n}\n.p_border_one {\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 3px;\n    display: block;\n    height: 260px;\n    width: 260px;\n    margin: auto;\n    margin-top: 10px;\n}\n.edit-picture {\n    margin-top: 20px;\n    margin-left: 10px;\n    margin-bottom: 10px;\n    display: inline-block;\n}\n#new_picture_select {\n    width: 200px;\n}\n.now_img {\n    width: 200px;\n    height: auto;\n}\n.inst-right {\n    float: right\n}\n.form_picture_button {\n    margin-right: 5px;\n}",".friends {\n    width: 80%;\n    height: 100%;\n    overflow: auto;\n    border-spacing: 50px;\n    display: inline-block;\n  }\n  \n  .box-friend {\n      display: inline-block;\n      width: 33%;\n      margin-bottom: 2.5%;\n      margin-top: 2.5%;\n      z-index: 1;\n  }\n  \n  .menu {\n      width: 19.5%;\n      height: 100%;\n      overflow: auto;\n      display: inline-block;\n      border-left-width: 3px;\n      border-left-style: solid;\n      z-index: 3;\n  }\n  \n  .friendAvatar {\n      margin-top: 5%;\n      margin: auto;\n      width: 70%;\n      height: auto;\n      border-style: solid;\n      border-radius: 10px;\n      border-width: 3px;\n      display: block;\n  }\n  \n  .friendName {\n      display: block;\n      margin: auto;\n      margin-top: 2.5%;\n      border-style: solid;\n      border-radius: 10px;\n      border-width: 3px;\n      width: 70%;\n      height: auto;\n      font-size: 0.7cm;\n      text-align: center;\n      padding-top: 0.2cm;\n      padding-bottom: 0.2cm;\n  }\n  \n  .menuIMG {\n    margin-top: 10px;\n    margin-left: 5%;\n    width: 80%;\n    border-style: solid;\n    border-radius: 10px;\n    border-width: 3px;\n  }\n\n  .menuIMG:after {\n    padding-top: 100%;\n  }\n\n  .myPhoto {\n    margin-top: 10px;\n    margin-left: 5%;\n    width: 80%;\n  }\n\n  .exit-friends { \n    border-style: solid;\n    border-radius: 10px;\n    border-width: 3px;\n    margin-top: 10px;\n    margin-left: 5%;\n    width: 80%;\n    height: auto;\n    font-size: 0.7cm;\n    text-align: center;\n    padding-top: 0.1cm;\n    padding-bottom: 0.1cm;\n    margin-bottom: 3px;\n}\n\n.btn {\n  border-style: solid;\n  border-radius: 10px;\n  border-width: 3px;\n  font-size: 0.85cm;\n  text-align: center;\n  padding-top: 0.1cm;\n  padding-bottom: 0.1cm;\n}\n\n.button-friends {\n      height: 2cm;      \n  }\n  \n  #seach {\n      background: url('/uploads/images/lupa.png'); \n      background-size: 100% 100%;\n  } \n  \n  .letter {\n      position: relative;\n      height: 3rem;\n      width: 6rem;\n      background-image: url('/uploads/images/letter.png'); \n      background-size: 100% 100%;\n      display: inline-block;\n      margin-top: -3rem;\n      float: left;\n      left: 10%;\n      border: 3px solid red;\n      border-radius: 7.5px;\n  }\n  \n  .online {\n      position: relative;\n      height: 3rem;\n      width: 6rem; \n      display: inline-block;\n      float: right;\n      right: 10%;\n      margin-top: -3rem;\n  }\n  .inchat {\n    background-size: 100% 100%;\n    background-image: url('/uploads/images/eye.png'); \n  }\n\n  .notincat {\n    background-size: 100% 100%;\n    background-image: url('/uploads/images/computer.png');\n  }\n  \n  .letterandnoonline{\n       margin-bottom: -1.5cm;\n  }\n  #online_me {\n    position: relative;\n    height: 1.3cm;\n    width: 2.6cm;\n    background-image: url('/uploads/images/computer.png'); \n    background-size: 100% 100%;\n    display: block;\n    bottom: 5px;\n    float: right;\n    left: 3px;\n    margin-top: -1.3cm;\n}\n\n.birthday {\n  position: relative;\n  margin-left: 2rem;\n  bottom: 1rem;\n  margin-bottom: -4rem;\n  height: 4rem;\n  width: 4rem;\n  background-size: 100% 100%;\n  background-image: url('/uploads/images/present.png');\n  z-index: 2;\n}",".chat { \n  width: 33%; \n  height: 100%;    \n  display: inline-block;\n  overflow: auto;\n  position: relative;\n}\n\n.library {\n  position: relative;\n  width: 67%; \n  height: 100%;    \n  display: inline-block;\n  overflow: auto;\n}\n\n.all {\n  border-left-width: 3px;\n  border-left-style: solid;\n  min-height: 100%;\n  overflow: hidden;\n  font-family: Arial, sans-serif;\n}\n\n.picta {\n  width: 100%;\n  border-style: ridge;\n}\n\n.pict{ \n  width: 100%;\n}\n  \n.pictaandtext {\n  width: 27%;     \n  height: auto;\n  display: inline-block;\n  margin-left: 10%;\n  margin-top: 3%;\n  margin-bottom: 3%;   \n  vertical-align: top;\n}\n  \n  .pictatext {\n    display: block;\n    border-style: solid;\n    border-radius: 10px;\n    border-width: 3px;\n    width: 100%;\n    height: auto;\n    text-align: center;\n    position: relative;\n    margin-top: 1%;\n    padding-top: 0.2cm;\n    padding-bottom: 0.1cm;\n  }\n  \n  img.pict {\n    border-width: 3px; \n    border-style: solid;\n    border-radius: 10px;\n  }\n  \n  .exit { \n    height: 2cm;\n    width: 2cm;\n    bottom: 2%;\n    background-image: url('/uploads/images/cross.png'); \n    background-size: 100% 100%;\n  }\n\n  .chat-menu {\n    width: 2cm;\n    float: right;\n    height: auto;\n  }\n\n  .menu-icon {\n    height: 2cm;\n    width: 2cm;\n    margin-top: 15px;\n  }\n  \n  #header {\n    width: 100%;\n    height: 70px;\n    margin: 0; \n    position: absolute;\n    top: 0;\n    z-index: 2;\n    border-bottom-width: 3px;\n    border-bottom-style: solid;\n  }\n  \n  .avatar {\n      width: 66px;\n      height: 66px;\n      position: absolute;\n      top: 2px;\n      z-index: 4;\n  }\n  \n  #friend {left: 2px;}\n  #me {right: 2px;}\n  \n  #chat {\n      width: 33%;\n      height: 60px;\n      font-size: 1cm;\n      margin: 0; \n      position: fixed;\n      bottom: 0;\n  }\n  \n  .text {\n      width: 75%;\n      height: 53px;\n      font-size: 0.9cm;\n      position: absolute;\n      bottom: 0;\n      resize: none;\n      overflow: auto;\n  }\n  \n  #footer_letter {\n      position: absolute;\n      height: 53px;\n      width: 23%;\n      right: 2px;\n      background-image: url('/uploads/images/letter.png'); \n      background-size: 100% 100%;\n      display: inline-block;\n  }\n  \n  .folder { \n    background-image: url('/uploads/images/folder.png');\n    background-size: 100% 100%; \n    border: 0;  \n    display: block;\n    height: 100%;\n  }\n  \n  .downloads {\n       margin-left: 20%;\n       margin-bottom: 8%;\n       margin-top: 32%;\n       width: 60%;\n       position: relative;\n  }\n\n  .downloads-picture {\n    max-width: 100%;\n    max-height: 100%;\n    margin: auto;\n  }\n  \n  .libraryName {\n      display: block;\n      border-style: solid;\n      border-radius: 10px;\n      border-width: 3px;\n      width: 100%;\n      height: auto;\n      text-align: center;\n      position: relative;\n      padding-top: 0.2cm;\n      padding-bottom: 0.1cm;\n  }\n  \n  .box {\n      display: inline-block;\n      width: 49%;\n      height: auto;\n      margin-bottom: 15px;\n      margin-top: 15px;\n  }\n   \n  .tablo, .tablo_msg, .tablo_uv, .tablo_pict {\n    position: fixed;\n    height: 80%;\n    width: 60%;\n    top: 10%;\n    left: 20%;\n    background: #FFFFFF;\n    z-index: 2;\n    border: 4px solid red;\n    border-radius: 12px;\n    vertical-align: baseline;\n    z-index: 5;\n   }\n   \n  .vtablo { \n    font-size: 1.2cm;\n    text-align: center;\n    vertical-align: middle;\n    margin-top: 2%;\n  }\n   \n  .ontablo {\n     position: relative;\n     width: 18%;\n     display: inline-block;\n     height: 40%;\n     padding: 1%;\n     overflow-y: auto;\n     margin-top: 8%;\n   }\n  \n  #ontablo_uv { \n    max-height: 90%;\n    height: auto;\n    width: auto;\n    overflow: hidden;\n    margin-top: 3%;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    max-width: 90%;\n  }\n\n  .ontablo_vote {\n    max-height: 70%;\n    height: auto;\n    width: auto;\n    overflow: hidden;\n    margin-top: 1%;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    max-width: 70%;\n  }\n  \n  #ontablo_text {display: table-cell;}\n    \n  #strelka, #strelka_msg {\n    background: url('/uploads/images/strelka.png');\n    background-size: 100% 100%; \n    height: 20%;\n    margin-bottom: 5%;\n  }\n  #musorka, #musorka_msg {\n    background: url('/uploads/images/musorka.png');\n    background-size: 100% 100%;\n    width: 10%;\n    margin: 5%;\n    height: 20%;\n  }\n  #question, #question_msg {\n    background: url('/uploads/images/question.png');\n    background-size: 100% 100%; \n  }\n  \n  #avatar, #delete_msg, #delete_pict {\n    display: inline-block;\n    margin-top: 30px;\n    width: auto;\n    height: auto;\n    z-index: 7;\n    max-height: 100%;\n    max-width: 95%;\n    margin: auto;\n  }\n  \n  #delete_msg { \n       position: absolute;\n       width: 88%;\n       padding: 3%;\n       margin: auto;\n       margin-top: 10%;\n  }\n  \n  #deleteChatMusorka{\n    height: 2cm;\n    width: 2cm;\n    background-image: url('/uploads/images/musorka.png');\n    background-size: 100% 100%;\n    display: inline-block;  \n    position: relative;\n    margin-bottom: 2%;\n    margin-left: 3%;\n  }\n  \n  #cross, #cross_msg, #cross_uv, #cross_pict {\n      background-image: url('/uploads/images/cross.png');\n      background-size: 100% 100%;\n      height: 2cm;\n      width: 2cm;\n      display: inline-block;\n      bottom: 12%;\n      left: 22%;\n      position: fixed;\n  }\n  \n  #tick, #tick_msg, #tick_pict {\n    background-image: url('/uploads/images/tick.png');\n    background-size: 100% 100%;\n    height: 2cm;\n    width: 2.5cm;\n    display: inline-block;\n    position: fixed;\n    bottom: 12%;\n    right: 22%;\n  }\n\n  #pause {\n    background-image: url('/uploads/images/stop.png');\n    background-size: 100% 100%;\n    height: 2cm;\n    width: 2cm;\n    display: inline-block;\n    position: fixed;\n    bottom: 12%;\n    left: 32%;\n  }\n\n  #resume {\n    background-image: url('/uploads/images/start.png');\n    background-size: 100% 100%;\n    height: 2cm;\n    width: 2cm;\n    display: inline-block;\n    position: fixed;\n    bottom: 12%;\n    left: 32%;\n  }\n\n  #send-vote {\n    background-image: url('/uploads/images/letter.png');\n    background-size: 100% 100%;\n    height: 2cm;\n    width: 4cm;\n    display: inline-block;\n    position: fixed;\n    bottom: 12%;\n    right: 32%;\n  }\n  \n  #letterSend {\n      position: absolute;\n      height: 45px;\n      width: 95px;\n      right: 5px;\n      top: 25px;\n      z-index: 3;\n      animation-name: send;\n      animation-duration: 4s;\n  }\n  \n  @keyframes send {\n      from {right: 0;}\n      to {right: 100%;}\n  }\n  \n  #letterGet {\n      position: absolute;\n      height: 45px;\n      width: 20%;\n      right: 5px;\n      top: 25px;\n      z-index: 3;\n      animation-name: get;\n      animation-duration: 4s;\n  }\n  \n  @keyframes get {\n      from {right: 100%;}\n      to {right: 0;}\n  }\n  \n  .picture-lidrary {\n      width: 200px;\n      height: auto;\n  }\n  \n  .delete, .delete_pict {\n    background: url('/uploads/images/musorka.png');\n    background-size: 100% 100%; \n    height: 40px;\n    width: 40px;\n    margin-top: 10px;\n    display: block;\n    float: right;\n   }\n  \n  span.tc {background-color: transparent;}\n\n  #div_submit {\n    right: 2%; \n    top: 4cm;\n    position: fixed;\n  }\n  \n  #div_tick, #div_cross {\n    margin-right: 10%;\n    width: 1.5cm;\n    height: 1.5cm;\n  }\n\n  .backdrop {\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background: rgba(0, 0, 0, .4);\n    z-index: 4;\n}\n ",".light-1-bg {\n    background-color: #FEBDD3;\n}\n.middle-1-bg, .middle-1-bg-hover {\n    background-color: #D26F90;\n}\n.middle-1-bg-hover:hover {\n    background-color: #A53D60;\n}\n.dark-1-color {\n    color: #A53D60;\n}\n.dark-1-border {\n    border-color: #A53D60;\n}\n\n.light-2-bg {\n    background-color: #FDB666;\n}\n.middle-2-bg, .middle-2-bg-hover {\n    background-color: #D29754;\n}\n.middle-2-bg-hover:hover {\n    background-color: #A46721;\n}\n.dark-2-color {\n    color: #A46721;\n}\n.dark-2-border {\n    border-color: #A46721;\n}\n\n.light-3-bg {\n    background-color: #FFFF66;\n}\n.middle-3-bg, .middle-3-bg-hover {\n    background-color: #D3D354;\n}\n.middle-3-bg-hover:hover {\n    background-color: #A6A621;\n}\n.dark-3-color {\n    color: #A6A621;\n}\n.dark-3-border {\n    border-color: #A6A621;\n}\n\n.light-4-bg {\n    background-color: #A3FD5A;\n}\n.middle-4-bg, .middle-4-bg-hover {\n    background-color: #8BD250;\n}\n.middle-4-bg-hover:hover {\n    background-color: #5BA41D;\n}\n.dark-4-color {\n    color: #5BA41D;\n}\n.dark-4-border {\n    border-color: #5BA41D;\n}\n\n.light-5-bg {\n    background-color: #57E3F7;\n}\n.middle-5-bg, .middle-5-bg-hover {\n    background-color: #4FC0D0;\n}\n.middle-5-bg-hover:hover {\n    background-color: #1C90A1;\n}\n.dark-5-color {\n    color: #1C90A1;\n}\n.dark-5-border {\n    border-color: #1C90A1;\n}\n\n.light-6-bg {\n    background-color: #B59DD7;\n}\n.middle-6-bg, .middle-6-bg-hover {\n    background-color: #8F67C6;\n}\n.middle-6-bg-hover:hover {\n    background-color: #58338C;\n}\n.dark-6-color {\n    color: #58338C;\n}\n.dark-6-border {\n    border-color: #58338C;\n}\n\n.light-7-bg {\n    background-color: #CCCCCC;\n}\n.middle-7-bg, .middle-7-bg-hover {\n    background-color: #999999;\n}\n.middle-7-bg-hover:hover {\n    background-color: #737373;\n}\n.dark-7-color {\n    color: #737373;\n}\n.dark-7-border {\n    border-color: #737373;\n}\n\n\n.file-1 {\n    background-color: #FC2125;\n}\n\n.file-2 {\n    background-color: #29C732;\n}\n\n.file-3 {\n    background-color: #0A60FF;\n}\n\n.file-4 {\n    background-color: #FD8208;\n}\n\n.file-5 {\n    background-color: #FEC309;\n}\n\n.file-6 {\n    background-color: #90714C;\n}\n\n.file-7 {\n    background-color: #FB0D8F;\n}\n\n.file-8 {\n    background-color: #9D33D6;\n}\n\n.file-9 {\n    background-color: #453CCC;\n}\n\n.file-10 {\n    background-color: #7B7B81;\n}\n\n.file-11 {\n    background-color: #007B81;\n}\n\n.file-12 {\n    background-color: #678532;\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Zoya/Desktop/emo/client/src/styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map