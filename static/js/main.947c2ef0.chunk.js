(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{29:function(n,e,t){"use strict";t.r(e);var r,a=t(0),c=t(15),s=t.n(c),i=t(3),o=t(4),u=t.n(o),d=t(9),b=t(2),l=t(13);!function(n){n.EASY="easy",n.MEDIUM="medium",n.HARD="hard"}(r||(r={}));var p,x,f,j,g=function(){var n=Object(d.a)(u.a.mark((function n(e,t){var r,a,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://opentdb.com/api.php?amount=".concat(e,"&difficulty=").concat(t,"&type=multiple"),n.next=3,fetch(r);case 3:return n.next=5,n.sent.json();case 5:return a=n.sent,c=a.results.map((function(n){return Object(l.a)(Object(l.a)({},n),{},{answers:(e=[].concat(Object(i.a)(n.incorrect_answers),[n.correct_answer]),Object(i.a)(e).sort((function(){return Math.random()-.5})))});var e})),n.abrupt("return",c);case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),h=t(5),O=t(6),m=O.b.div(p||(p=Object(h.a)(["\n  max-width: 1100px;\n  background: #ebfeff;\n  border-radius: 10px;\n  border: 2px solid #0085a3;\n  padding: 20px;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n  text-align: center;\n\n  p {\n    font-size: 1rem;\n  }\n"]))),w=O.b.div(x||(x=Object(h.a)(["\n  transition: all 0.3s ease;\n\n  :hover {\n    opacity: 0.8;\n  }\n\n  button {\n    cursor: pointer;\n    font-size: 0.8rem;\n    width: 100%;\n    height: 40px;\n    margin: 5px 0;\n    background: ",";\n    border: 3px solid #fff;\n    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n    color: #fff;\n    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);\n  }\n"])),(function(n){var e=n.correct,t=n.userClicked;return e?"linear-gradient(90deg, #56ffa4, #59bc86)":!e&&t?"linear-gradient(90deg, #ff5656, #c16868)":"linear-gradient(90deg, #56ccff, #6eafb4)"})),v=t(1),k=function(n){var e=n.question,t=n.answers,r=n.callback,a=n.userAnswer,c=n.questionNo,s=n.totalQuestions;return Object(v.jsxs)(m,{children:[Object(v.jsxs)("p",{className:"number",children:["Question: ",c," / ",s]}),Object(v.jsx)("p",{dangerouslySetInnerHTML:{__html:e}}),Object(v.jsx)("div",{children:t.map((function(n){return Object(v.jsx)(w,{correct:(null===a||void 0===a?void 0:a.correctAnswer)===n,userClicked:(null===a||void 0===a?void 0:a.answer)===n,children:Object(v.jsx)("button",{disabled:!!a,value:n,onClick:r,children:Object(v.jsx)("span",{dangerouslySetInnerHTML:{__html:n}})})},n)}))})]})},y=t.p+"static/media/background.0ea1ed92.jpg",S=Object(O.a)(f||(f=Object(h.a)(["\n  html {\n    height: 100%;\n  }\n\n  body {\n    background-image: url(",");\n    background-size: cover;\n    margin: 0;\n    padding: 0, 20px;\n    display: flex;\n    justify-content: center;\n  }\n\n  * {\n    box-sizing: border-box;\n    font-family: 'Catamaran', 'sans-serif';\n    user-select: none;\n  }\n"])),y),z=O.b.div(j||(j=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  > p {\n    color: #fff\n  }\n\n  .score {\n    color: black;\n    font-size: 2rem;\n    margin: 0;\n  }\n\n  h1 {\n    font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    background-image: inline-linear-gradient(180deg, #fff, #87f1ff);\n    background-size: 100%;\n    background-clip: text;\n    -web-kit-background-clip: text;\n    -web-kit-text-fill-color: transparent;\n    -moz-background-clip: text;\n    -moz-text-fill-color: transparent;\n    filter: drop-shadow(2px 2px #0085a3);\n    font-size: 70px;\n    text-align: center;\n    margin: 20px;\n  }\n\n  .start, .next {\n    cursor: pointer;\n    background: linear-gradient(180deg, #fff, #ffcc91);\n    border: 2px solid #d38558;\n    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n    border-radius: 10px;\n    height: 40px;\n    margin: 20px 0;\n    padding: 0 40px;\n  }\n\n  .start {\n    max-width: 200px;\n  }\n"]))),q=function(){var n=Object(a.useState)(!1),e=Object(b.a)(n,2),t=e[0],c=e[1],s=Object(a.useState)([]),o=Object(b.a)(s,2),l=o[0],p=o[1],x=Object(a.useState)(0),f=Object(b.a)(x,2),j=f[0],h=f[1],O=Object(a.useState)([]),m=Object(b.a)(O,2),w=m[0],y=m[1],q=Object(a.useState)(0),A=Object(b.a)(q,2),N=A[0],_=A[1],C=Object(a.useState)(!0),I=Object(b.a)(C,2),M=I[0],Q=I[1],E=function(){var n=Object(d.a)(u.a.mark((function n(){var e;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),Q(!1),n.next=4,g(10,r.EASY);case 4:e=n.sent,p(e),_(0),y([]),h(0),c(!1);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(S,{}),Object(v.jsxs)(z,{children:[Object(v.jsx)("h1",{children:"REACT QUIZ"}),(M||10===w.length)&&Object(v.jsx)("button",{className:"start",onClick:E,children:"Start"}),!M&&Object(v.jsxs)("p",{className:"score",children:["Score: ",N]}),t&&Object(v.jsx)("p",{children:"Loading Questions ..."}),!t&&!M&&Object(v.jsx)(k,{questionNo:j+1,totalQuestions:10,question:l[j].question,answers:l[j].answers,userAnswer:w?w[j]:void 0,callback:function(n){if(!M){var e=n.currentTarget.value,t=l[j].correct_answer===e;t&&_((function(n){return n+1}));var r={question:l[j].question,answer:e,correct:t,correctAnswer:l[j].correct_answer};y((function(n){return[].concat(Object(i.a)(n),[r])}))}}}),!M&&!t&&w.length===j+1&&9!==j&&Object(v.jsx)("button",{className:"next",onClick:function(){var n=j+1;10===n?Q(!0):h(n)},children:"Next Question"})]})]})};s.a.render(Object(v.jsx)(a.StrictMode,{children:Object(v.jsx)(q,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.947c2ef0.chunk.js.map