(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{134:function(e,t,n){var r=n(221),a=r,o=Function("return this")();a.exportSymbol("proto.EveryDay",null,o),a.exportSymbol("proto.OneDay",null,o),a.exportSymbol("proto.OneDay.Content",null,o),proto.OneDay=function(e){r.Message.initialize(this,e,0,-1,proto.OneDay.repeatedFields_,null)},a.inherits(proto.OneDay,r.Message),a.DEBUG&&!COMPILED&&(proto.OneDay.displayName="proto.OneDay"),proto.OneDay.Content=function(e){r.Message.initialize(this,e,0,-1,proto.OneDay.Content.repeatedFields_,null)},a.inherits(proto.OneDay.Content,r.Message),a.DEBUG&&!COMPILED&&(proto.OneDay.Content.displayName="proto.OneDay.Content"),proto.EveryDay=function(e){r.Message.initialize(this,e,0,-1,proto.EveryDay.repeatedFields_,null)},a.inherits(proto.EveryDay,r.Message),a.DEBUG&&!COMPILED&&(proto.EveryDay.displayName="proto.EveryDay"),proto.OneDay.repeatedFields_=[2],r.Message.GENERATE_TO_OBJECT&&(proto.OneDay.prototype.toObject=function(e){return proto.OneDay.toObject(e,this)},proto.OneDay.toObject=function(e,t){var n={date:r.Message.getFieldWithDefault(t,1,""),contentList:r.Message.toObjectList(t.getContentList(),proto.OneDay.Content.toObject,e)};return e&&(n.$jspbMessageInstance=t),n}),proto.OneDay.deserializeBinary=function(e){var t=new r.BinaryReader(e),n=new proto.OneDay;return proto.OneDay.deserializeBinaryFromReader(n,t)},proto.OneDay.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var n=t.readString();e.setDate(n);break;case 2:n=new proto.OneDay.Content;t.readMessage(n,proto.OneDay.Content.deserializeBinaryFromReader),e.addContent(n);break;default:t.skipField()}}return e},proto.OneDay.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.OneDay.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.OneDay.serializeBinaryToWriter=function(e,t){var n=void 0;(n=e.getDate()).length>0&&t.writeString(1,n),(n=e.getContentList()).length>0&&t.writeRepeatedMessage(2,n,proto.OneDay.Content.serializeBinaryToWriter)},proto.OneDay.Content.repeatedFields_=[3],r.Message.GENERATE_TO_OBJECT&&(proto.OneDay.Content.prototype.toObject=function(e){return proto.OneDay.Content.toObject(e,this)},proto.OneDay.Content.toObject=function(e,t){var n,a={date:r.Message.getFieldWithDefault(t,1,""),text:r.Message.getFieldWithDefault(t,2,""),imageList:null==(n=r.Message.getRepeatedField(t,3))?void 0:n};return e&&(a.$jspbMessageInstance=t),a}),proto.OneDay.Content.deserializeBinary=function(e){var t=new r.BinaryReader(e),n=new proto.OneDay.Content;return proto.OneDay.Content.deserializeBinaryFromReader(n,t)},proto.OneDay.Content.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var n=t.readString();e.setDate(n);break;case 2:n=t.readString();e.setText(n);break;case 3:n=t.readString();e.addImage(n);break;default:t.skipField()}}return e},proto.OneDay.Content.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.OneDay.Content.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.OneDay.Content.serializeBinaryToWriter=function(e,t){var n=void 0;(n=e.getDate()).length>0&&t.writeString(1,n),(n=e.getText()).length>0&&t.writeString(2,n),(n=e.getImageList()).length>0&&t.writeRepeatedString(3,n)},proto.OneDay.Content.prototype.getDate=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.OneDay.Content.prototype.setDate=function(e){return r.Message.setProto3StringField(this,1,e)},proto.OneDay.Content.prototype.getText=function(){return r.Message.getFieldWithDefault(this,2,"")},proto.OneDay.Content.prototype.setText=function(e){return r.Message.setProto3StringField(this,2,e)},proto.OneDay.Content.prototype.getImageList=function(){return r.Message.getRepeatedField(this,3)},proto.OneDay.Content.prototype.setImageList=function(e){return r.Message.setField(this,3,e||[])},proto.OneDay.Content.prototype.addImage=function(e,t){return r.Message.addToRepeatedField(this,3,e,t)},proto.OneDay.Content.prototype.clearImageList=function(){return this.setImageList([])},proto.OneDay.prototype.getDate=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.OneDay.prototype.setDate=function(e){return r.Message.setProto3StringField(this,1,e)},proto.OneDay.prototype.getContentList=function(){return r.Message.getRepeatedWrapperField(this,proto.OneDay.Content,2)},proto.OneDay.prototype.setContentList=function(e){return r.Message.setRepeatedWrapperField(this,2,e)},proto.OneDay.prototype.addContent=function(e,t){return r.Message.addToRepeatedWrapperField(this,2,e,proto.OneDay.Content,t)},proto.OneDay.prototype.clearContentList=function(){return this.setContentList([])},proto.EveryDay.repeatedFields_=[1],r.Message.GENERATE_TO_OBJECT&&(proto.EveryDay.prototype.toObject=function(e){return proto.EveryDay.toObject(e,this)},proto.EveryDay.toObject=function(e,t){var n={onedayList:r.Message.toObjectList(t.getOnedayList(),proto.OneDay.toObject,e)};return e&&(n.$jspbMessageInstance=t),n}),proto.EveryDay.deserializeBinary=function(e){var t=new r.BinaryReader(e),n=new proto.EveryDay;return proto.EveryDay.deserializeBinaryFromReader(n,t)},proto.EveryDay.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var n=new proto.OneDay;t.readMessage(n,proto.OneDay.deserializeBinaryFromReader),e.addOneday(n);break;default:t.skipField()}}return e},proto.EveryDay.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.EveryDay.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.EveryDay.serializeBinaryToWriter=function(e,t){var n;(n=e.getOnedayList()).length>0&&t.writeRepeatedMessage(1,n,proto.OneDay.serializeBinaryToWriter)},proto.EveryDay.prototype.getOnedayList=function(){return r.Message.getRepeatedWrapperField(this,proto.OneDay,1)},proto.EveryDay.prototype.setOnedayList=function(e){return r.Message.setRepeatedWrapperField(this,1,e)},proto.EveryDay.prototype.addOneday=function(e,t){return r.Message.addToRepeatedWrapperField(this,1,e,proto.OneDay,t)},proto.EveryDay.prototype.clearOnedayList=function(){return this.setOnedayList([])},a.object.extend(t,proto)},157:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(135),i=n(242),s=n(8),l=n.n(s),c=n(30),u=n.n(c),p=n(12);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f="http://127.0.0.1";"web"==p.a.OS?(console.log("hi, web"),f=location.protocol+"//"+document.domain+":8888"):f="http://192.168.31.38:8888";var g=f+"/api/v1/upload",h=f+"/api/v1/get",m=f+"/api/v1/download",v=f+"/api/v1/search",D={platform:p.a.OS,urls:{host:f,upload_url:g,get_url:h,download_url:m,search_url:v},oneday_list:[],fetched_at_boot:!1,data_download_url:void 0,search_result_list:void 0},O=Object(r.createContext)(null),w=function(e,t){switch(t.type){case"setOnedayList":return d({},e,{oneday_list:t.payload,fetched_at_boot:!0});case"setDataDownloadUrl":return d({},e,{data_download_url:t.payload});case"setSearchResultList":return d({},e,{search_result_list:t.payload});default:throw new Error}},E=function(e){var t=Object(r.useReducer)(w,D),n=l()(t,2),o=n[0],i=n[1];return a.a.createElement(O.Provider,{value:[o,i]},e.children)},C=n(2),b=n.n(C),x=n(5),_=n(34),B=n(4),F=n(60),L=n(59),k=n(15),j=k.a.get("window").width,M=k.a.get("window").height,R=n(98).default,S=n(134);function T(e){return b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",R.post(e.urls.get_url,{action:"get_everyday"}).then((function(e){var t=e.data;return S.EveryDay.deserializeBinary(t.sql).getOnedayList()})).catch((function(e){console.log(e)})));case 1:case"end":return t.stop()}}),null,null,null,Promise)}function P(e){var t=e.image_list,n=[];return t.map((function(e,t){n.push(a.a.createElement(L.a,{key:t,style:I.image,source:{uri:e}}))})),a.a.createElement(B.a,{style:I.images},n)}function W(e){var t=e.oneday,n=t.getContentList(),r=[];return n.map((function(e,t){var n=e.getText().trim().length>0;r.push(a.a.createElement(B.a,{style:I.content,key:t},n&&a.a.createElement(_.a,{style:I.text},e.getText()),a.a.createElement(P,{image_list:e.getImageList()})))})),a.a.createElement(B.a,{style:I.oneday},a.a.createElement(_.a,{style:I.date},t.getDate()),r)}function z(){var e=Object(r.useContext)(O),t=l()(e,2),n=t[0],o=t[1];var i=[];return 0==n.fetched_at_boot?function(){var e;b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.awrap(T(n));case 2:e=t.sent,o({type:"setOnedayList",payload:e});case 4:case"end":return t.stop()}}),null,null,null,Promise)}():n.oneday_list.map((function(e,t){i.push(a.a.createElement(W,{key:t,oneday:e}))})),a.a.createElement(F.a,{contentContainerStyle:I.everyday},i)}var I=x.a.create({everyday:{flexGrow:1,backgroundColor:"#ECEFF1"},oneday:{width:j,marginBottom:.02*M,backgroundColor:"#fff"},date:{textAlign:"center",marginBottom:.04*M},content:{},text:{textAlign:"center",fontSize:16,marginBottom:.04*M},images:{display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",flexWrap:"wrap"},image:{width:33.3/100*j,height:33.3/100*j,resizeMode:"contain"}}),A=n(29),U=n.n(A),G=n(95),N=n(50),H=n(17),J=n.n(H),Y=n(16),q=n.n(Y),$=n(36),K=n.n($),X=n(21),Q=n.n(X),V=n(22),Z=n.n(V),ee=n(13),te=n.n(ee),ne=n(158),re=n(41),ae=n(159),oe=n(47);function ie(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var se=k.a.get("window").width,le=k.a.get("window").height,ce=function(e){Q()(a,e);var t,n=(t=a,function(){var e,n=te()(t);if(ie()){var r=te()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Z()(this,e)});function a(){var e;q()(this,a);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).getPermissionAsync=function(){var e;return b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!ae.a.platform.ios){t.next=6;break}return t.next=3,b.a.awrap(oe.c(oe.b));case 3:e=t.sent,"granted"!==e.status&&alert("Sorry, we need camera roll permissions to make this work!");case 6:case"end":return t.stop()}}),null,null,null,Promise)},e._pickImage=function(){var t;return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,b.a.awrap(ne.a({mediaTypes:re.a.Images,base64:!0,allowsEditing:!0,aspect:[4,3],quality:1}));case 3:(t=n.sent).cancelled||(e.props.setImageUriList([].concat(J()(e.props.imageUriList),[t.uri])),e.toDataUrl(t.uri,(function(e,t){e.props.setImageBase64List([].concat(J()(e.props.imageBase64List),[t]))}))),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),null,null,[[0,7]],Promise)},e}return K()(a,[{key:"render",value:function(){return r.createElement(B.a,this.props,r.createElement(B.a,{style:ue.pickImageButton},r.createElement(N.a,{title:"Pick an image",color:"#FFCC80",onPress:this._pickImage})),r.createElement(B.a,{style:ue.imageBox},this.props.imageUriList.map((function(e,t){return r.createElement(B.a,{style:ue.image,key:t},r.createElement(L.a,{key:t,source:{uri:e},style:ue.image}))}))))}},{key:"componentDidMount",value:function(){this.getPermissionAsync()}},{key:"toDataUrl",value:function(e,t){var n=this,r=new XMLHttpRequest;r.onload=function(){var e=new FileReader;e.onloadend=function(){t(n,e.result)},e.readAsDataURL(r.response)},r.open("GET",e),r.responseType="blob",r.send()}}]),a}(r.Component),ue=x.a.create({pickImageButton:{marginBottom:.005*le},imageBox:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignContent:"stretch",flexWrap:"wrap"},image:{width:33.3/100*se,height:33.3/100*se}}),pe=k.a.get("window").width,ye=k.a.get("window").height,de=n(98).default,fe=n(134),ge="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",he=function(){for(var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=t,r="",a=0,o=0,i=ge;n.charAt(0|o)||(i="=",o%1);r+=i.charAt(63&a>>8-o%1*8)){if((e=n.charCodeAt(o+=3/4))>255)throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");a=a<<8|e}return r};function me(e,t,n){var r=new fe.OneDay,a=r.addContent();a.setText(t.trim()),a.setImageList(n);var o=r.serializeBinary();o=function(e){for(var t="",n=new Uint8Array(e),r=n.byteLength,a=0;a<r;a++)t+=String.fromCharCode(n[a]);return he(he(t))}(o),de.post(e,{action:"oneday",data:o}).then((function(e){console.log(e),setTimeout((function(){location.reload()}),1e3)})).catch((function(e){console.log(e)}))}function ve(e){return a.a.createElement(G.a,U()({},e,{editable:!0,multiline:!0,autoFocus:!0,numberOfLines:8,maxLength:40}))}function De(e){var t=e.navigation,n=a.a.useState(""),o=l()(n,2),i=o[0],s=o[1],c=a.a.useState([]),u=l()(c,2),p=u[0],y=u[1],d=a.a.useState([]),f=l()(d,2),g=f[0],h=f[1],m=Object(r.useContext)(O),v=l()(m,2),D=v[0];v[1];return a.a.createElement(B.a,{style:Oe.container},a.a.createElement(B.a,{style:Oe.topWhite}),a.a.createElement(B.a,{style:Oe.topBar},a.a.createElement(B.a,{style:Oe.cancelButton},a.a.createElement(N.a,{title:"Cancel",color:"#90A4AE",onPress:function(){s(""),y([]),h([]),t.navigate("Your History")}})),a.a.createElement(B.a,{style:Oe.saveButton},a.a.createElement(N.a,{title:"Save",color:"#FF5252",onPress:function(){me(D.urls.upload_url,i,g),t.navigate("Your History")}}))),a.a.createElement(B.a,{style:Oe.inputBox},a.a.createElement(ve,{style:Oe.textInput,onChangeText:function(e){s(e)},value:i,placeholder:"What's happenning?"})),a.a.createElement(ce,{style:Oe.imagePicker,imageUriList:p,setImageUriList:y,imageBase64List:g,setImageBase64List:h}))}var Oe=x.a.create({container:{flex:1},topWhite:{},topBar:{flex:.8,flexDirection:"row",justifyContent:"space-between"},cancelButton:{width:.2*pe,justifyContent:"center"},saveButton:{width:.2*pe,justifyContent:"center"},inputBox:{flex:6,justifyContent:"center",alignItems:"center",margin:.02*ye},textInput:{fontSize:24},imagePicker:{flex:10,justifyContent:"flex-start"}}),we=k.a.get("window").width,Ee=k.a.get("window").height,Ce=n(98).default;function be(e,t){return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Ce.post(e.urls.search_url,{text:t}).then((function(e){var t=e.data;return"ok"==t.status?t.result:void 0})).catch((function(e){console.log(e)})));case 1:case"end":return n.stop()}}),null,null,null,Promise)}function xe(e){var t=e.text,n=e.onTextChange,r=e.state,o=e.dispatch;return a.a.createElement(G.a,{style:{height:.05*Ee,borderColor:"#E0E0E0",borderWidth:1},onChangeText:function(e){n(e.trim())},onKeyPress:function(e){if("Enter"==e.nativeEvent.key){!function(){var e;b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.a.awrap(be(r,t));case 2:e=n.sent,o({type:"setSearchResultList",payload:e});case 4:case"end":return n.stop()}}),null,null,null,Promise)}()}},value:t,placeholder:"What you wanna know?",autoFocus:!0})}function _e(){var e=Object(r.useContext)(O),t=l()(e,2),n=t[0],o=t[1],i=a.a.useState(""),s=l()(i,2),c=s[0],u=s[1],p=[];return void 0!=n.search_result_list&&n.search_result_list.map((function(e,t){p.push(a.a.createElement(B.a,{key:t},a.a.createElement(_.a,null,e.date),a.a.createElement(_.a,null,e.text),t+1!=n.search_result_list.length&&a.a.createElement(_.a,null,"\n---------------------\n\n")))})),a.a.createElement(B.a,{style:Be.container},a.a.createElement(B.a,{style:Be.search_area},a.a.createElement(B.a,{style:Be.search_inputbox},a.a.createElement(xe,{text:c,onTextChange:u,state:n,dispatch:o})),a.a.createElement(B.a,{style:Be.search_outputbox},a.a.createElement(F.a,{contentContainerStyle:{flexGrow:1}},p))),a.a.createElement(B.a,{style:Be.download_area},void 0==n.data_download_url?a.a.createElement(B.a,{style:Be.download_button},a.a.createElement(N.a,{title:"Download Your Data",color:"#90A4AE",onPress:function(){!function(e,t){var n;b.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:n=e.urls.download_url,void 0==e.data_download_url&&t({type:"setDataDownloadUrl",payload:n});case 2:case"end":return r.stop()}}),null,null,null,Promise)}(n,o)}})):a.a.createElement(B.a,{style:Be.download_link},a.a.createElement("a",{href:n.data_download_url},n.data_download_url))))}var Be=x.a.create({container:{flex:1,flexGrow:1},search_area:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#E1F5FE"},download_area:{flex:1,alignItems:"center",backgroundColor:"#FCE4EC"},search_inputbox:{flex:1,width:we},search_outputbox:{flex:8,width:we,backgroundColor:"#E1F5FE"},download_button:{flex:1,flexDirection:"column",justifyContent:"center",width:.5*we},download_link:{flex:1,flexDirection:"column",justifyContent:"center"}});n.d(t,"a",(function(){return Le}));var Fe=Object(i.a)();function Le(){return a.a.createElement(E,null,a.a.createElement(o.a,null,a.a.createElement(Fe.Navigator,{initialRouteName:"Your History"},a.a.createElement(Fe.Screen,{name:"Your History",component:z}),a.a.createElement(Fe.Screen,{name:"Add More",component:De}),a.a.createElement(Fe.Screen,{name:"Search",component:_e}))))}},165:function(e,t,n){n(166),e.exports=n(231)},166:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/ui/expo-service-worker.js",{scope:"/ui/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[165,1,2]]]);
//# sourceMappingURL=app.72a5f784.chunk.js.map