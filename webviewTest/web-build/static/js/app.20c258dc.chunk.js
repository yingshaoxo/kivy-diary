(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{133:function(e,t,n){var r=n(221),a=r,o=Function("return this")();a.exportSymbol("proto.EveryDay",null,o),a.exportSymbol("proto.OneDay",null,o),a.exportSymbol("proto.OneDay.Content",null,o),proto.OneDay=function(e){r.Message.initialize(this,e,0,-1,proto.OneDay.repeatedFields_,null)},a.inherits(proto.OneDay,r.Message),a.DEBUG&&!COMPILED&&(proto.OneDay.displayName="proto.OneDay"),proto.OneDay.Content=function(e){r.Message.initialize(this,e,0,-1,proto.OneDay.Content.repeatedFields_,null)},a.inherits(proto.OneDay.Content,r.Message),a.DEBUG&&!COMPILED&&(proto.OneDay.Content.displayName="proto.OneDay.Content"),proto.EveryDay=function(e){r.Message.initialize(this,e,0,-1,proto.EveryDay.repeatedFields_,null)},a.inherits(proto.EveryDay,r.Message),a.DEBUG&&!COMPILED&&(proto.EveryDay.displayName="proto.EveryDay"),proto.OneDay.repeatedFields_=[2],r.Message.GENERATE_TO_OBJECT&&(proto.OneDay.prototype.toObject=function(e){return proto.OneDay.toObject(e,this)},proto.OneDay.toObject=function(e,t){var n={date:r.Message.getFieldWithDefault(t,1,""),contentList:r.Message.toObjectList(t.getContentList(),proto.OneDay.Content.toObject,e)};return e&&(n.$jspbMessageInstance=t),n}),proto.OneDay.deserializeBinary=function(e){var t=new r.BinaryReader(e),n=new proto.OneDay;return proto.OneDay.deserializeBinaryFromReader(n,t)},proto.OneDay.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var n=t.readString();e.setDate(n);break;case 2:n=new proto.OneDay.Content;t.readMessage(n,proto.OneDay.Content.deserializeBinaryFromReader),e.addContent(n);break;default:t.skipField()}}return e},proto.OneDay.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.OneDay.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.OneDay.serializeBinaryToWriter=function(e,t){var n=void 0;(n=e.getDate()).length>0&&t.writeString(1,n),(n=e.getContentList()).length>0&&t.writeRepeatedMessage(2,n,proto.OneDay.Content.serializeBinaryToWriter)},proto.OneDay.Content.repeatedFields_=[3],r.Message.GENERATE_TO_OBJECT&&(proto.OneDay.Content.prototype.toObject=function(e){return proto.OneDay.Content.toObject(e,this)},proto.OneDay.Content.toObject=function(e,t){var n,a={date:r.Message.getFieldWithDefault(t,1,""),text:r.Message.getFieldWithDefault(t,2,""),imageList:null==(n=r.Message.getRepeatedField(t,3))?void 0:n};return e&&(a.$jspbMessageInstance=t),a}),proto.OneDay.Content.deserializeBinary=function(e){var t=new r.BinaryReader(e),n=new proto.OneDay.Content;return proto.OneDay.Content.deserializeBinaryFromReader(n,t)},proto.OneDay.Content.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var n=t.readString();e.setDate(n);break;case 2:n=t.readString();e.setText(n);break;case 3:n=t.readString();e.addImage(n);break;default:t.skipField()}}return e},proto.OneDay.Content.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.OneDay.Content.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.OneDay.Content.serializeBinaryToWriter=function(e,t){var n=void 0;(n=e.getDate()).length>0&&t.writeString(1,n),(n=e.getText()).length>0&&t.writeString(2,n),(n=e.getImageList()).length>0&&t.writeRepeatedString(3,n)},proto.OneDay.Content.prototype.getDate=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.OneDay.Content.prototype.setDate=function(e){return r.Message.setProto3StringField(this,1,e)},proto.OneDay.Content.prototype.getText=function(){return r.Message.getFieldWithDefault(this,2,"")},proto.OneDay.Content.prototype.setText=function(e){return r.Message.setProto3StringField(this,2,e)},proto.OneDay.Content.prototype.getImageList=function(){return r.Message.getRepeatedField(this,3)},proto.OneDay.Content.prototype.setImageList=function(e){return r.Message.setField(this,3,e||[])},proto.OneDay.Content.prototype.addImage=function(e,t){return r.Message.addToRepeatedField(this,3,e,t)},proto.OneDay.Content.prototype.clearImageList=function(){return this.setImageList([])},proto.OneDay.prototype.getDate=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.OneDay.prototype.setDate=function(e){return r.Message.setProto3StringField(this,1,e)},proto.OneDay.prototype.getContentList=function(){return r.Message.getRepeatedWrapperField(this,proto.OneDay.Content,2)},proto.OneDay.prototype.setContentList=function(e){return r.Message.setRepeatedWrapperField(this,2,e)},proto.OneDay.prototype.addContent=function(e,t){return r.Message.addToRepeatedWrapperField(this,2,e,proto.OneDay.Content,t)},proto.OneDay.prototype.clearContentList=function(){return this.setContentList([])},proto.EveryDay.repeatedFields_=[1],r.Message.GENERATE_TO_OBJECT&&(proto.EveryDay.prototype.toObject=function(e){return proto.EveryDay.toObject(e,this)},proto.EveryDay.toObject=function(e,t){var n={onedayList:r.Message.toObjectList(t.getOnedayList(),proto.OneDay.toObject,e)};return e&&(n.$jspbMessageInstance=t),n}),proto.EveryDay.deserializeBinary=function(e){var t=new r.BinaryReader(e),n=new proto.EveryDay;return proto.EveryDay.deserializeBinaryFromReader(n,t)},proto.EveryDay.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var n=new proto.OneDay;t.readMessage(n,proto.OneDay.deserializeBinaryFromReader),e.addOneday(n);break;default:t.skipField()}}return e},proto.EveryDay.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.EveryDay.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.EveryDay.serializeBinaryToWriter=function(e,t){var n;(n=e.getOnedayList()).length>0&&t.writeRepeatedMessage(1,n,proto.OneDay.serializeBinaryToWriter)},proto.EveryDay.prototype.getOnedayList=function(){return r.Message.getRepeatedWrapperField(this,proto.OneDay,1)},proto.EveryDay.prototype.setOnedayList=function(e){return r.Message.setRepeatedWrapperField(this,1,e)},proto.EveryDay.prototype.addOneday=function(e,t){return r.Message.addToRepeatedWrapperField(this,1,e,proto.OneDay,t)},proto.EveryDay.prototype.clearOnedayList=function(){return this.setOnedayList([])},a.object.extend(t,proto)},157:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(134),i=n(242),s=n(9),l=n.n(s),c=n(30),u=n.n(c),p=n(12);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f="http://127.0.0.1";"web"==p.a.OS?(console.log("hi, web"),f=location.protocol+"//"+document.domain+":8888"):f="http://192.168.49.31:8888";var g=f+"/api/v1/upload",m=f+"/api/v1/get",h=f+"/api/v1/download",D={platform:p.a.OS,urls:{host:f,upload_url:g,get_url:m,download_url:h},oneday_list:[],fetched_at_boot:!1,data_download_url:void 0},O=Object(r.createContext)(null),v=function(e,t){switch(t.type){case"setOnedayList":return d({},e,{oneday_list:t.payload,fetched_at_boot:!0});case"setDataDownloadUrl":return d({},e,{data_download_url:t.payload});default:throw new Error}},w=function(e){var t=Object(r.useReducer)(v,D),n=l()(t,2),o=n[0],i=n[1];return a.a.createElement(O.Provider,{value:[o,i]},e.children)},E=n(2),C=n.n(E),b=n(5),x=n(49),B=n(4),F=n(94),_=n(59),L=n(15),j=L.a.get("window").width,M=L.a.get("window").height,k=n(97).default,R=n(133);function S(e){return C.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",k.post(e.urls.get_url,{action:"get_everyday"}).then((function(e){var t=e.data;return R.EveryDay.deserializeBinary(t.sql).getOnedayList()})).catch((function(e){console.log(e)})));case 1:case"end":return t.stop()}}),null,null,null,Promise)}function T(e){var t=e.image_list,n=[];return t.map((function(e,t){n.push(a.a.createElement(_.a,{key:t,style:W.image,source:{uri:e}}))})),a.a.createElement(B.a,{style:W.images},n)}function z(e){var t=e.oneday,n=t.getContentList(),r=[];return n.map((function(e,t){r.push(a.a.createElement(B.a,{style:W.content,key:t},a.a.createElement(x.a,{style:W.text},e.getText()),a.a.createElement(T,{image_list:e.getImageList()})))})),a.a.createElement(B.a,{style:W.oneday},a.a.createElement(x.a,{style:W.date},t.getDate()),r)}function P(){var e=Object(r.useContext)(O),t=l()(e,2),n=t[0],o=t[1];var i=[];return 0==n.fetched_at_boot?function(){var e;C.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.awrap(S(n));case 2:e=t.sent,o({type:"setOnedayList",payload:e});case 4:case"end":return t.stop()}}),null,null,null,Promise)}():n.oneday_list.map((function(e,t){i.push(a.a.createElement(z,{key:t,oneday:e}))})),a.a.createElement(F.a,{contentContainerStyle:W.everyday},i)}var W=b.a.create({everyday:{flexGrow:1,backgroundColor:"#ECEFF1"},oneday:{width:j,marginBottom:.02*M,backgroundColor:"#fff"},date:{textAlign:"center",marginBottom:.04*M},content:{},text:{textAlign:"center",fontSize:20,marginBottom:.04*M},images:{display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",flexWrap:"wrap"},image:{width:33.3/100*j,height:33.3/100*j,resizeMode:"contain"}}),I=n(29),A=n.n(I),U=n(156),G=n(50),N=n(17),H=n.n(N),J=n(16),Y=n.n(J),q=n(35),$=n.n(q),X=n(21),K=n.n(X),Q=n(22),V=n.n(Q),Z=n(13),ee=n.n(Z),te=n(158),ne=n(40),re=n(159),ae=n(46);function oe(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var ie=L.a.get("window").width,se=L.a.get("window").height,le=function(e){K()(a,e);var t,n=(t=a,function(){var e,n=ee()(t);if(oe()){var r=ee()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return V()(this,e)});function a(){var e;Y()(this,a);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).getPermissionAsync=function(){var e;return C.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!re.a.platform.ios){t.next=6;break}return t.next=3,C.a.awrap(ae.c(ae.b));case 3:e=t.sent,"granted"!==e.status&&alert("Sorry, we need camera roll permissions to make this work!");case 6:case"end":return t.stop()}}),null,null,null,Promise)},e._pickImage=function(){var t;return C.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,C.a.awrap(te.a({mediaTypes:ne.a.Images,base64:!0,allowsEditing:!0,aspect:[4,3],quality:1}));case 3:(t=n.sent).cancelled||(e.props.setImageUriList([].concat(H()(e.props.imageUriList),[t.uri])),e.toDataUrl(t.uri,(function(e,t){e.props.setImageBase64List([].concat(H()(e.props.imageBase64List),[t]))}))),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),null,null,[[0,7]],Promise)},e}return $()(a,[{key:"render",value:function(){return r.createElement(B.a,this.props,r.createElement(B.a,{style:ce.pickImageButton},r.createElement(G.a,{title:"Pick an image",color:"#FFCC80",onPress:this._pickImage})),r.createElement(B.a,{style:ce.imageBox},this.props.imageUriList.map((function(e,t){return r.createElement(B.a,{style:ce.image,key:t},r.createElement(_.a,{key:t,source:{uri:e},style:ce.image}))}))))}},{key:"componentDidMount",value:function(){this.getPermissionAsync()}},{key:"toDataUrl",value:function(e,t){var n=this,r=new XMLHttpRequest;r.onload=function(){var e=new FileReader;e.onloadend=function(){t(n,e.result)},e.readAsDataURL(r.response)},r.open("GET",e),r.responseType="blob",r.send()}}]),a}(r.Component),ce=b.a.create({pickImageButton:{marginBottom:.005*se},imageBox:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignContent:"stretch",flexWrap:"wrap"},image:{width:33.3/100*ie,height:33.3/100*ie}}),ue=L.a.get("window").width,pe=L.a.get("window").height,ye=n(97).default,de=n(133),fe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",ge=function(){for(var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=t,r="",a=0,o=0,i=fe;n.charAt(0|o)||(i="=",o%1);r+=i.charAt(63&a>>8-o%1*8)){if((e=n.charCodeAt(o+=3/4))>255)throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");a=a<<8|e}return r};function me(e,t,n){var r=new de.OneDay,a=r.addContent();a.setText(t.trim()),a.setImageList(n);var o=r.serializeBinary();o=function(e){for(var t="",n=new Uint8Array(e),r=n.byteLength,a=0;a<r;a++)t+=String.fromCharCode(n[a]);return ge(ge(t))}(o),ye.post(e,{action:"oneday",data:o}).then((function(e){console.log(e),setTimeout((function(){location.reload()}),1e3)})).catch((function(e){console.log(e)}))}function he(e){return a.a.createElement(U.a,A()({},e,{editable:!0,multiline:!0,numberOfLines:8,maxLength:40}))}function De(e){var t=e.navigation,n=a.a.useState(""),o=l()(n,2),i=o[0],s=o[1],c=a.a.useState([]),u=l()(c,2),p=u[0],y=u[1],d=a.a.useState([]),f=l()(d,2),g=f[0],m=f[1],h=Object(r.useContext)(O),D=l()(h,2),v=D[0];D[1];return a.a.createElement(B.a,{style:Oe.container},a.a.createElement(B.a,{style:Oe.topWhite}),a.a.createElement(B.a,{style:Oe.topBar},a.a.createElement(B.a,{style:Oe.cancelButton},a.a.createElement(G.a,{title:"Cancel",color:"#90A4AE",onPress:function(){s(""),y([]),m([]),t.navigate("Your History")}})),a.a.createElement(B.a,{style:Oe.saveButton},a.a.createElement(G.a,{title:"Save",color:"#FF5252",onPress:function(){me(v.urls.upload_url,i,g),t.navigate("Your History")}}))),a.a.createElement(B.a,{style:Oe.inputBox},a.a.createElement(he,{style:Oe.textInput,onChangeText:function(e){s(e)},value:i,placeholder:"What's happenning?"})),a.a.createElement(le,{style:Oe.imagePicker,imageUriList:p,setImageUriList:y,imageBase64List:g,setImageBase64List:m}))}var Oe=b.a.create({container:{flex:1},topWhite:{},topBar:{flex:.8,flexDirection:"row",justifyContent:"space-between"},cancelButton:{width:.2*ue,justifyContent:"center"},saveButton:{width:.2*ue,justifyContent:"center"},inputBox:{flex:6,justifyContent:"center",alignItems:"center",margin:.02*pe},textInput:{fontSize:24},imagePicker:{flex:10,justifyContent:"flex-start"}}),ve=L.a.get("window").width;L.a.get("window").height,n(97).default;function we(){var e=Object(r.useContext)(O),t=l()(e,2),n=t[0],o=t[1];return a.a.createElement(B.a,{style:Ee.container},a.a.createElement(B.a,{style:Ee.search_area}),a.a.createElement(B.a,{style:Ee.download_area},void 0==n.data_download_url?a.a.createElement(B.a,{style:Ee.download_button},a.a.createElement(G.a,{title:"Download Your Data",color:"#90A4AE",onPress:function(){!function(e,t){var n;C.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:n=e.urls.download_url,void 0==e.data_download_url&&t({type:"setDataDownloadUrl",payload:n});case 2:case"end":return r.stop()}}),null,null,null,Promise)}(n,o)}})):a.a.createElement(B.a,{style:Ee.download_link},a.a.createElement("a",{href:n.data_download_url},n.data_download_url))))}var Ee=b.a.create({container:{flex:1,flexGrow:1},search_area:{flex:1,backgroundColor:"#E1F5FE"},download_area:{flex:1,alignItems:"center",backgroundColor:"#FCE4EC"},download_button:{flex:1,flexDirection:"column",justifyContent:"center",width:.5*ve},download_link:{flex:1,flexDirection:"column",justifyContent:"center"}});n.d(t,"a",(function(){return be}));var Ce=Object(i.a)();function be(){return a.a.createElement(w,null,a.a.createElement(o.a,null,a.a.createElement(Ce.Navigator,{initialRouteName:"Your History"},a.a.createElement(Ce.Screen,{name:"Your History",component:P}),a.a.createElement(Ce.Screen,{name:"Add More",component:De}),a.a.createElement(Ce.Screen,{name:"Search",component:we}))))}},165:function(e,t,n){n(166),e.exports=n(231)},166:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/ui/expo-service-worker.js",{scope:"/ui/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[165,1,2]]]);
//# sourceMappingURL=app.20c258dc.chunk.js.map