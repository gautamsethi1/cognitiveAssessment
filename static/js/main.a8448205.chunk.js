(this["webpackJsonpcognitive-assessment"]=this["webpackJsonpcognitive-assessment"]||[]).push([[0],{27:function(e,t,n){"use strict";n.r(t),n.d(t,"GlobalStyle",(function(){return _}));var r,s,c,a=n(6),o=n(0),i=n.n(o),u=n(15),l=n.n(u),p=n(5),d=n(2),b=n.n(d),j=n(3),m=n(4),f=n(8),h=f.b.div(r||(r=Object(a.a)(["\n    max-width = 1200px;\n    background: #ebfeff;\n    border-radius: 10px;\n    border: 2px solid #0085a3;\n    padding: 15px;\n    text-align: center;\n\n    p {\n        font-size: 1rem;\n    }\n"]))),x=f.b.div(s||(s=Object(a.a)(["\ntransition: all 0.3s easel\n:hover {\n    opacity 0.7;\n}\nbutton{\n    cursor: pointer;\n    user-select:none;\n    font-size: 0.8rem;\n    width: 100%;\n    height: 40px;\n    margin: 5px 0;\n    background: ",";\n    border: 3px solid #fff;\n    box-shadow: 1px 2px 0 px rgba(0,0,0, 0.1);\n    border-radius: 10px;\n    color: #fff;\n    text-shadow: 0px 1px 0px rgba(0,0,0,0.25)\n\n}\n}"])),(function(e){var t=e.correct,n=e.userClicked;return t?"linear-gradient(90deg, #56ffa4, #59bc86)":!t&&n?"linear-gradient(90deg, #ff5656, #c16868)":"linear-gradient(90deg, #56ccff, #6eafb4)"})),O=n(1),g=function(e){var t=e.question,n=e.answers,r=e.callback,s=e.userAnswer,c=e.questionNum,a=e.totalNumQuestions;return Object(O.jsxs)(h,{children:[Object(O.jsxs)("p",{className:"num",children:["Question: ",c,"/",a]}),Object(O.jsx)("p",{dangerouslySetInnerHTML:{__html:t}}),Object(O.jsx)("div",{children:n.map((function(e){return Object(O.jsx)(x,{correct:(null===s||void 0===s?void 0:s.correctAnswer)===e,userClicked:(null===s||void 0===s?void 0:s.answer)===e,children:Object(O.jsx)("button",{disabled:!!s,value:e,onClick:r,children:Object(O.jsx)("span",{dangerouslySetInnerHTML:{__html:e}})})},e)}))})]})},v=n(14),w=function(){var e=Object(j.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://opentdb.com/api.php?amount=25&category=18&difficulty=medium&type=multiple",e.next=3,fetch("https://opentdb.com/api.php?amount=25&category=18&difficulty=medium&type=multiple");case 3:return e.next=5,e.sent.json();case 5:return n=e.sent,console.log(n),e.abrupt("return",n.results.map((function(e){return Object(v.a)(Object(v.a)({},e),{},{answers:(t=[].concat(Object(p.a)(e.incorrect_answers),[e.correct_answer]),Object(p.a)(t).sort((function(){return Math.random()-.5})))});var t})));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=15,k=60,S=document.getElementById("Timer"),T=["Performance on this examination is as follows"],A=new Audio("https://feeds.soundcloud.com/stream/1009914160-gautam-sethi-91617982-patternedaudiosample.mp3"),N=new Audio("https://feeds.soundcloud.com/stream/1009880044-gautam-sethi-91617982-randomsample.mp3"),C=function(){var e=Object(o.useState)(!1),t=Object(m.a)(e,2),n=t[0],r=t[1],s=Object(o.useState)([]),c=Object(m.a)(s,2),a=c[0],i=c[1],u=Object(o.useState)(0),l=Object(m.a)(u,2),d=l[0],f=l[1],h=Object(o.useState)([]),x=Object(m.a)(h,2),v=x[0],C=x[1],q=Object(o.useState)(0),I=Object(m.a)(q,2),M=I[0],Q=I[1],L=Object(o.useState)(!0),z=Object(m.a)(L,2),D=z[0],E=z[1],H=Object(o.useState)(),B=Object(m.a)(H,2),J=B[0],P=B[1];console.log(a);var F=function(){var e=Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N.pause(),T.concat("Test Type 2"),A.play(),K();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:A.pause(),T.concat("Test Type 3"),N.play(),K();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:A.pause(),N.pause(),K();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),E(!1),e.next=4,w(y);case 4:t=e.sent,setInterval(U,1e3),i(t),Q(0),C([]),f(0),r(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===S?document.createElement("Timer"):S.innerHTML="0: ".concat(k),k>0&&(k--);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(_,{}),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h1",{children:" Cognitive Assesment "}),Object(O.jsxs)("p",{id:"Timer",children:["Timer: 00:",k]}),null==J||D?null:J.toString(),Object(O.jsx)("p",{children:"\n"}),D||v.length===y?Object(O.jsx)("button",{className:"Start No Distraction Assessment",onClick:R,children:"Start the Assessment: Test Type 1"}):null,D||v.length===y?Object(O.jsx)("button",{className:"Start Patterned Distraction Assessment",onClick:F,children:"Start the Assessment: Test Type 2"}):null,D||v.length===y?Object(O.jsx)("button",{className:"Start Random Distraction Assessment",onClick:G,children:"Start the Assessment: Test Type 3"}):null,D?null:Object(O.jsxs)("p",{className:"scorecard",children:["Score: ",M]}),n&&Object(O.jsx)("p",{children:"Loading Assessment..."}),!D&&!n&&Object(O.jsx)(g,{questionNum:d+1,totalNumQuestions:y,question:a[d].question,answers:a[d].answers,userAnswer:v?v[d]:void 0,callback:function(e){if(D)N.pause();else{var t=e.currentTarget.value,n=a[d].correct_answer===t;n&&Q((function(e){return e+1}));var r={question:a[d].question,answer:t,correct:n,correctAnswer:a[d].correct_answer};C((function(e){return[].concat(Object(p.a)(e),[r])})),T.push(" Question ".concat(d+1,": ").concat(n,", time used: ").concat(60-k)),P(T)}}}),!n&&!D&&v.length===d+1&&d+1!==y&&Object(O.jsx)("button",{className:"nextQuestion",onClick:function(){var e=d+1;e===y?E(!0):k=60,f(e),setInterval(U,2e3)},children:" Next "})]})]})},_=Object(f.a)(c||(c=Object(a.a)(["\n  html {\n    height: 100%;\n  }\n\n  body {\n    background-color: rgb(255,254,252);  \n    background-size: cover;\n    margin: 0;\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n  }"])));l.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.a8448205.chunk.js.map