(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[18],{18:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>I});var a=n(791),i=n(87),r=n(842),s=n(184);const o=e=>{let{data:t}=e;return(0,s.jsx)("article",{className:"degree-container",children:(0,s.jsxs)("header",{children:[(0,s.jsx)("h4",{className:"degree",children:t.degree}),(0,s.jsxs)("p",{className:"school",children:[(0,s.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},c=e=>{let{data:t}=e;return(0,s.jsxs)("div",{className:"education",children:[(0,s.jsx)("div",{className:"link-to",id:"education"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Education"})}),t.map((e=>(0,s.jsx)(o,{data:e},e.school)))]})};c.defaultProps={data:[]};const l=c;var d=n(892),u=n.n(d),h=n(745);const m=e=>{let{data:{name:t,position:n,url:a,startDate:i,endDate:r,summary:o,highlights:c}}=e;return(0,s.jsxs)("article",{className:"jobs-container",children:[(0,s.jsxs)("header",{children:[(0,s.jsxs)("h4",{children:[(0,s.jsx)("a",{href:a,children:t})," - ",n]}),(0,s.jsxs)("p",{className:"daterange",children:[" ",u()(i).format("MMMM YYYY")," - ",r?u()(r).format("MMMM YYYY"):"PRESENT"]})]}),o?(0,s.jsx)(h.ZP,{options:{overrides:{p:{props:{className:"summary"}}}},children:o}):null,c?(0,s.jsx)("ul",{className:"points",children:c.map((e=>(0,s.jsx)("li",{children:e},e)))}):null]})},g=e=>{let{data:t}=e;return(0,s.jsxs)("div",{className:"experience",children:[(0,s.jsx)("div",{className:"link-to",id:"experience"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Experience"})}),t.map((e=>(0,s.jsx)(m,{data:e},"".concat(e.name,"-").concat(e.position))))]})};g.defaultProps={data:[]};const p=g,f=e=>{let{handleClick:t,active:n,label:a}=e;return(0,s.jsx)("button",{className:"skillbutton ".concat(n[a]?"skillbutton-active":""),type:"button",onClick:()=>t(a),children:a})},y=e=>{let{data:t,categories:n}=e;const{category:a,competency:i,title:r}=t,o={background:n.filter((e=>a.includes(e.name))).map((e=>e.color))[0]},c={...o,width:"".concat(String(Math.min(100,Math.max(i/5*100,0))),"%")};return(0,s.jsxs)("div",{className:"skillbar clearfix",children:[(0,s.jsx)("div",{className:"skillbar-title",style:o,children:(0,s.jsx)("span",{children:r})}),(0,s.jsx)("div",{className:"skillbar-bar",style:c}),(0,s.jsxs)("div",{className:"skill-bar-percent",children:[i," / 5"]})]})};y.defaultProps={categories:[]};const v=y,b=e=>{let{skills:t,categories:n}=e;const i=Object.fromEntries([["All",!1]].concat(n.map((e=>{let{name:t}=e;return[t,!1]})))),[r,o]=(0,a.useState)(i),c=e=>{const t=Object.keys(r).reduce(((t,n)=>({...t,[n]:e===n&&!r[n]})),{});t.All=!Object.keys(r).some((e=>t[e])),o(t)};return(0,s.jsxs)("div",{className:"skills",children:[(0,s.jsx)("div",{className:"link-to",id:"skills"}),(0,s.jsxs)("div",{className:"title",children:[(0,s.jsx)("h3",{children:"Skills"}),(0,s.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),(0,s.jsx)("div",{className:"skill-button-container",children:Object.keys(r).map((e=>(0,s.jsx)(f,{label:e,active:r,handleClick:c},e)))}),(0,s.jsx)("div",{className:"skill-row-container",children:(()=>{const e=Object.keys(r).reduce(((e,t)=>r[t]?t:e),"All");return t.sort(((e,t)=>{let n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((t=>"All"===e||t.category.includes(e))).map((e=>(0,s.jsx)(v,{categories:n,data:e},e.title)))})()})]})};b.defaultProps={skills:[],categories:[]};const S=b,D=e=>{let{data:t,last:n}=e;return(0,s.jsxs)("li",{className:"course-container",children:[(0,s.jsxs)("a",{href:t.link,children:[(0,s.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,s.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,s.jsx)("div",{className:"course-dot",children:(0,s.jsx)("p",{className:"course-name",children:" \u2022"})})]})};D.defaultProps={last:!1};const k=D,M=e=>e.sort(((e,t)=>{let n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map(((t,n)=>(0,s.jsx)(k,{data:t,last:n===e.length-1},t.title))),x=e=>{let{data:t}=e;return(0,s.jsxs)("div",{className:"courses",children:[(0,s.jsx)("div",{className:"link-to",id:"courses"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Selected Courses"})}),(0,s.jsx)("ul",{className:"course-list",children:M(t)})]})};x.defaultProps={data:[]};const w=x,j=()=>(0,s.jsxs)("div",{className:"references",children:[(0,s.jsx)("div",{className:"link-to",id:"references"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)(i.rU,{to:"/contact",children:(0,s.jsx)("h3",{children:"References are available upon request"})})})]}),$=[{title:"Convex Optimization",number:"EE 364a",link:"http://stanford.edu/class/ee364a/",university:"Stanford"},{title:"Machine Learning",number:"CS 229",link:"http://cs229.stanford.edu/",university:"Stanford"},{title:"Convolutional Neural Networks for Visual Recognition",number:"CS 231n",link:"http://cs231n.stanford.edu/",university:"Stanford"},{title:"Numerical Linear Algebra",number:"CME 302",link:"http://scpd.stanford.edu/search/publicCourseSearchDetails.do;jsessionid=561188A06434D7D97953C4706DE12831?method=load&courseId=11685",university:"Stanford"},{title:"Numerical Optimization",number:"CME 304",link:"http://web.stanford.edu/class/cme304/",university:"Stanford"},{title:"Discrete Mathematics and Algorithms",number:"CME 305",link:"http://stanford.edu/~rezab/discrete/",university:"Stanford"},{title:"PDE\u2019s of Applied Mathematics",number:"CME 303",link:"http://web.stanford.edu/class/math220/index.html",university:"Stanford"},{title:"Introduction to Linear Dynamical Systems",number:"EE 263",link:"http://ee263.stanford.edu/",university:"Stanford"},{title:"Introduction to Statistical Signal Processing",number:"EE 278B",link:"http://web.stanford.edu/class/ee278/",university:"Stanford"},{title:"Spacecraft Design",number:"AA 236A",link:"",university:"Stanford"},{title:"Advanced Programming",number:"CME 212",link:"",university:"Stanford"},{title:"Design Theory and Methodology",number:"MAE 397",link:"https://web.stanford.edu/group/designx_lab/cgi-bin/mainwiki/index.php/ME397_Design_Theory_%26_Methodology_Seminar",university:"Stanford"},{title:"Software Engineering Concepts",number:"CSE 442",link:"",university:"Buffalo"},{title:"Hardware/Software Integrated System Design",number:"CSE 453",link:"",university:"Buffalo"},{title:"Data Structures",number:"CS 250",link:"http://www.cse.buffalo.edu/~hungngo/classes/2013/Fall/250/",university:"Buffalo"},{title:"Introduction to Digital Signal Processing",number:"EE 516",link:"",university:"Buffalo"},{title:"Computer Vision and Image Processing",number:"CSE 573",link:"http://cubs.buffalo.edu/~inwogu/teaching/Coursepage573_fa14/",university:"Buffalo"},{title:"Realtime Embedded Systems",number:"CSE 321",link:"",university:"Buffalo"},{title:"Computer Architecture",number:"CSE 590",link:"http://www.cse.buffalo.edu/~stevko/courses/cse490/spring11/",university:"Buffalo"},{title:"Small Data",number:"MS&E 226",link:"http://web.stanford.edu/class/msande226/",university:"Stanford"},{title:"Stochastic Control",number:"EE 266",link:"http://ee266.stanford.edu/",university:"Stanford"},{title:"Simulation",number:"MS&E 223",link:"http://web.stanford.edu/class/msande223/handout.htm",university:"Stanford"},{title:"Deep Learning for Natural Language Processing",number:"CS 224d",link:"http://cs224d.stanford.edu/",university:"Stanford"}],E=[{school:"Stanford University",degree:"M.S. Computational and Mathematical Engineering",link:"https://stanford.edu",year:2016},{school:"University at Buffalo",degree:"B.S. Electrical Engineering, Computer Engineering",link:"https://buffalo.edu",year:2012}],C=[{name:"Smile Identity",position:"VP Engineering & Head of AI",url:"https://smileidentity.com",startDate:"2022-01-01",summary:"Smile builds machine learning APIs to compare user submitted photos to ID documents. Our APIs are\n    used by hundreds of thousands of people every day to access financial services. As VP of Engineering,\n    I provide technical leadership on high-impact projects, influence and coach a distributed team of engineers,\n    and facilitate alignment and clarity across teams on goals, outcomes, and timelines. I was promoted\n    from Director of Engineering to VP of Engineering in April 2022, and then to VP of Engineering and Head\n    of AI in November 2022. I lead a 20+ person engineering org. I directly manage ~8 engineers and spend\n    >50% of my time writing code.",highlights:["Redesigned engineering processes for bug tracking, meetings, and standups. Improved culture for code reviews, blameless post-mortems, and retrospectives.","Re-architected engineering hiring and onboarding processes. Recruited several strong engineers.","Reorged engineering teams to focus on product delivery. Created a new team to focus on ML infrastructure.","Lead re-design of internal APIs for inference. Built new computer vision pipelines for industry leading certifications (NIST/iBeta liveness).","Pitched, designed, developed, deployed, and maintain a fraud detection product based on 1-N facial recognition using embeddings and vector search."]},{name:"Skeptical Investments",position:"Co-founder",url:"http://skepticalinvestments.biz",startDate:"2017-04-01",summary:"Skeptical Investments is a micro-vc fund focused on Angel, Seed, and Series-A\n    YC companies.",highlights:["Created the InstaSafe. Fast, automated investment docs for YC companies.","Advise several startups in the fund."]},{name:"Arthena",position:"Co-founder & C.T.O.",url:"https://arthena.com",startDate:"2014-01-01",endDate:"2022-01-01",summary:'Arthena is a Series A Company funded by <a href="https://www.anthemis.com/">Athemis</a>,\n    <a href="https://foundationcapital.com">Foundation Capital</a>, and <a href="https://ycombinator.com/">YC</a>.\n    We develop quantitative strategies to predict the value of fine art and build investment products.\n    I ran a 20-person product and engineering org for 8 years. We were acquired by\n    <a href="https://www.masterworks.com/">Masterworks</a> in 2023.',highlights:["Built production, online, end-to-end optimized machine learning pipelines for time-series prediction.","Designed micro-service architecture around: data collection, data integrity, feature engineering, research, strategy, backtesting, deployment, and reporting.","Set and communicated team priorities that supported the broader organization's goals. Aligned strategy, processes, and decision-making across teams.","Set clear expectations with individuals based on their level and role and aligned them to the broader organization's goals. Met regularly with individuals to discuss performance and development, and provided feedback and coaching.","Developed the long-term technical vision and roadmap within, and often beyond, the scope of my teams. Evolved the roadmap to meet anticipated future requirements and infrastructure needs."]},{name:"Enveritas",position:"ML Engineering Contractor",url:"http://enveritas.org",startDate:"2016-09-01",endDate:"2018-01-01",summary:"Enveritas is a non-profit that works with coffee farmers to improve their livelihoods.\n    I joined on day one and helped build a variety of tools to collect and analyze data. I also advised\n    on technical strategy, helped hire engineers, and advised on their YC application.",highlights:["Trained a model for the Brazilian Coffee Scenes Dataset with better than state of the art accuracy.","Collected training sets on the ground in Uganda. Built dashboards to visualize work of surveyors using Flask, React, and D3.","Performed supporting analysis to ensure data integrity using Pandas, t-SNE, SVM's, and other techniques."]},{name:"Zenysis",position:"Software Engineering Contractor",url:"https://zenysis.com",startDate:"2016-02-01",endDate:"2016-03-01",summary:"Zenysis develops data analysis and visualization tools for government agencies and international organizations.\n    Their solutions help improve decision-making by integrating and analyzing large-scale datasets from various sources.\n    I was the second contributor to the codebase. We built data visualization tools and tackled complex data ingestion\n    challenges for the Ethiopian Ministry of Health.",highlights:["Worked in Addis Ababa for the Ethiopian Ministry of Health and built data visualization tools in React and Flask.","Ingested multiple databases with different alphabets, calendars, and without official spellings of geographic locations."]},{name:"Matroid",position:"Co-founder",url:"https://matroid.com",startDate:"2015-07-01",endDate:"2016-01-01",summary:"Matroid is a computer vision platform for creating and deploying detectors. Detectors help customers identify objects,\n    events, or patterns in images and videos without requiring machine learning or coding expertise. I played a crucial role in\n    defining the company's vision. I was responsible for architecting and building the initial product. I left shortly after the\n    Series A to focus on Arthena.",highlights:["Developed end to end machine learning pipeline to train visual classifiers from keywords using Caffe, Node.JS, Redis, MongoDB, and other technologies."]},{name:"Planet",position:"Missions Intern",url:"https://planet.com",startDate:"2014-06-01",endDate:"2015-01-01",highlights:["Built models to improve image quality, signal to noise ratio, and dynamic range.","Performed statistical analysis of image quality in Matlab and Python.  Developed flight software in C++.","Organized first hackathon, prototyped hardware, and designed and built photography equipment for rocket launches."]},{name:"Planetary Resources",position:"Avionics Intern",startDate:"2014-01-01",endDate:"2014-05-01",url:"http://planetaryresources.com",highlights:["Developed simulations in Matlab for Attitude Determination and Control Subsystem.","Developed processes for in lab testing and characterization of various subsystems.","Assembled flight hardware in cleanroom."]},{name:"Facebook",position:"Software Engineer Intern",url:"https://facebook.com",startDate:"2013-06-01",endDate:"2013-09-01",highlights:["Developed software in python for automated testing of servers.","Performed statistical analysis with R, HIVE to assist in triage of malfunctioning servers.","Worked with vendors and ODM's during triage to assist in risk mitigation."]},{name:"SEDS-USA",position:"At Large Board Member",url:"http://seds.org",startDate:"2013-10-01",endDate:"2014-10-01",highlights:["Elected to Board of Directors of the USA's largest student space advocacy group based on 5+ years of work with SEDS.","Responsibilities included: organizational strategy, conference presentations, fundraising, special projects, promoting SEDS nationally and internationally, and photographing conferences."]},{name:"UB Nanosatellite Program",position:"Co-founder, Program Manager",url:"https://ubnl.space/",startDate:"2010-10-01",endDate:"2012-06-01",highlights:["Coauthored grant to build a multi-spectral imaging satellite as part of the AFRL University Nanosatellite Program.","Lead a team of 60 students through satellite development life cycle. Served as a technical expert, acquired intimate working knowledge of satellite subsystems.  Solicited funding through NASA, AFOSR, and several corporate sponsors."]}],N=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:5,category:["Web Development","Javascript"]},{title:"React",competency:2,category:["Web Development","Javascript"]},{title:"Next.JS",competency:3,category:["Web Development","Javascript"]},{title:"Bash",competency:2,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:4,category:["Web Development","Tools"]},{title:"Heroku",competency:2,category:["Web Development","Tools"]},{title:"MongoDB",competency:3,category:["Web Development","Databases"]},{title:"ElasticSearch",competency:2,category:["Web Development","Databases"]},{title:"PostgreSQL/SQLite3/SQL/Redshift",competency:4,category:["Web Development","Databases","Languages"]},{title:"Redis",competency:3,category:["Web Development","Databases"]},{title:"Data Mining",competency:3,category:["ML Engineering"]},{title:"Express.JS",competency:2,category:["Web Development","Javascript"]},{title:"D3",competency:2,category:["Web Development","Javascript"]},{title:"Flask",competency:3,category:["Web Development","Python"]},{title:"FastAPI",competency:3,category:["Web Development","Python"]},{title:"Git/Mercurial",competency:3,category:["Tools"]},{title:"Kubernetes",competency:2,category:["Tools","Data Engineering"]},{title:"Google Cloud Compute",competency:2,category:["Tools","Web Development"]},{title:"AWS",competency:3,category:["Tools","Web Development"]},{title:"Docker",competency:3,category:["Tools","Data Engineering"]},{title:"AWS Lambda",competency:3,category:["Tools","Web Development"]},{title:"Numpy",competency:3,category:["Data Science","Data Engineering","Python","ML Engineering"]},{title:"Numba",competency:2,category:["Data Science","Data Engineering","Python"]},{title:"Tensorflow + Keras",competency:3,category:["ML Engineering","Python"]},{title:"PyTorch",competency:3,category:["ML Engineering","Python"]},{title:"Jupyter",competency:3,category:["Data Science","Python"]},{title:"Typescript",competency:3,category:["Web Development","Languages","Javascript"]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python","ML Engineering"]},{title:"Ruby",competency:2,category:["Languages"]},{title:"Ruby on Rails",competency:3,category:["Web Development","Languages"]},{title:"C++",competency:1,category:["Languages"]},{title:"Julia",competency:2,category:["Languages"]},{title:"MATLAB",competency:2,category:["Languages"]},{title:"R",competency:2,category:["Languages"]},{title:"Data Visualization",competency:3,category:["Data Science","Javascript"]},{title:"GraphQL",competency:2,category:["Web Development","Databases"]},{title:"Pandas",competency:5,category:["Data Engineering","ML Engineering","Python"]},{title:"Matplotlib",competency:3,category:["Data Engineering","ML Engineering","Python"]},{title:"Scikit-Learn",competency:4,category:["Data Engineering","ML Engineering","Python"]},{title:"Spark",competency:2,category:["Data Engineering","ML Engineering"]},{title:"Dagster",competency:2,category:["Data Engineering","Python","ML Engineering"]},{title:"Mypy",competency:3,category:["Python"]},{title:"Pylint",competency:4,category:["Data Engineering","Python"]}].map((e=>({...e,category:e.category.sort()}))),A=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],P=[...new Set(N.flatMap((e=>{let{category:t}=e;return t})))].sort().map(((e,t)=>({name:e,color:A[t]}))),L={Education:()=>(0,s.jsx)(l,{data:E}),Experience:()=>(0,s.jsx)(p,{data:C}),Skills:()=>(0,s.jsx)(S,{skills:N,categories:P}),Courses:()=>(0,s.jsx)(w,{data:$}),References:()=>(0,s.jsx)(j,{})},I=()=>(0,s.jsx)(r.Z,{title:"Resume",description:"Indupriya Bejugam's Resume. Student, Computer Science, Nit Patna.",children:(0,s.jsxs)("article",{className:"post",id:"resume",children:[(0,s.jsx)("header",{children:(0,s.jsxs)("div",{className:"title",children:[(0,s.jsx)("h2",{children:(0,s.jsx)(i.rU,{to:"resume",children:"Resume"})}),(0,s.jsx)("div",{className:"link-container",children:Object.keys(L).map((e=>(0,s.jsx)("h4",{children:(0,s.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)))})]})}),Object.entries(L).map((e=>{let[t,n]=e;return(0,s.jsx)(n,{},t)}))]})})},892:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,a="millisecond",i="second",r="minute",s="hour",o="day",c="week",l="month",d="quarter",u="year",h="date",m="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var a=String(e);return!a||a.length>=t?e:""+Array(t+1-a.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),a=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(a,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var a=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(a,l),r=n-i<0,s=t.clone().add(a+(r?-1:1),l);return+(-(a+(n-i)/(r?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:u,w:c,d:o,D:h,h:s,m:r,s:i,ms:a,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",S={};S[b]=f;var D="$isDayjsObject",k=function(e){return e instanceof j||!(!e||!e[D])},M=function e(t,n,a){var i;if(!t)return b;if("string"==typeof t){var r=t.toLowerCase();S[r]&&(i=r),n&&(S[r]=n,i=r);var s=t.split("-");if(!i&&s.length>1)return e(s[0])}else{var o=t.name;S[o]=t,i=o}return!a&&i&&(b=i),i||!a&&b},x=function(e,t){if(k(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new j(n)},w=v;w.l=M,w.i=k,w.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var j=function(){function f(e){this.$L=M(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[D]=!0}var y=f.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var a=t.match(g);if(a){var i=a[2]-1||0,r=(a[7]||"0").substring(0,3);return n?new Date(Date.UTC(a[1],i,a[3]||1,a[4]||0,a[5]||0,a[6]||0,r)):new Date(a[1],i,a[3]||1,a[4]||0,a[5]||0,a[6]||0,r)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return w},y.isValid=function(){return!(this.$d.toString()===m)},y.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return x(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<x(e)},y.$g=function(e,t,n){return w.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,a=!!w.u(t)||t,d=w.p(e),m=function(e,t){var i=w.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return a?i:i.endOf(o)},g=function(e,t){return w.w(n.toDate()[e].apply(n.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,f=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case u:return a?m(1,0):m(31,11);case l:return a?m(1,f):m(0,f+1);case c:var b=this.$locale().weekStart||0,S=(p<b?p+7:p)-b;return m(a?y-S:y+(6-S),f);case o:case h:return g(v+"Hours",0);case s:return g(v+"Minutes",1);case r:return g(v+"Seconds",2);case i:return g(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,c=w.p(e),d="set"+(this.$u?"UTC":""),m=(n={},n[o]=d+"Date",n[h]=d+"Date",n[l]=d+"Month",n[u]=d+"FullYear",n[s]=d+"Hours",n[r]=d+"Minutes",n[i]=d+"Seconds",n[a]=d+"Milliseconds",n)[c],g=c===o?this.$D+(t-this.$W):t;if(c===l||c===u){var p=this.clone().set(h,1);p.$d[m](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else m&&this.$d[m](g);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[w.p(e)]()},y.add=function(a,d){var h,m=this;a=Number(a);var g=w.p(d),p=function(e){var t=x(m);return w.w(t.date(t.date()+Math.round(e*a)),m)};if(g===l)return this.set(l,this.$M+a);if(g===u)return this.set(u,this.$y+a);if(g===o)return p(1);if(g===c)return p(7);var f=(h={},h[r]=t,h[s]=n,h[i]=e,h)[g]||1,y=this.$d.getTime()+a*f;return w.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||m;var a=e||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),r=this.$H,s=this.$m,o=this.$M,c=n.weekdays,l=n.months,d=n.meridiem,u=function(e,n,i,r){return e&&(e[n]||e(t,a))||i[n].slice(0,r)},h=function(e){return w.s(r%12||12,e,"0")},g=d||function(e,t,n){var a=e<12?"AM":"PM";return n?a.toLowerCase():a};return a.replace(p,(function(e,a){return a||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return w.s(t.$y,4,"0");case"M":return o+1;case"MM":return w.s(o+1,2,"0");case"MMM":return u(n.monthsShort,o,l,3);case"MMMM":return u(l,o);case"D":return t.$D;case"DD":return w.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(n.weekdaysMin,t.$W,c,2);case"ddd":return u(n.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(r);case"HH":return w.s(r,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(r,s,!0);case"A":return g(r,s,!1);case"m":return String(s);case"mm":return w.s(s,2,"0");case"s":return String(t.$s);case"ss":return w.s(t.$s,2,"0");case"SSS":return w.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(a,h,m){var g,p=this,f=w.p(h),y=x(a),v=(y.utcOffset()-this.utcOffset())*t,b=this-y,S=function(){return w.m(p,y)};switch(f){case u:g=S()/12;break;case l:g=S();break;case d:g=S()/3;break;case c:g=(b-v)/6048e5;break;case o:g=(b-v)/864e5;break;case s:g=b/n;break;case r:g=b/t;break;case i:g=b/e;break;default:g=b}return m?g:w.a(g)},y.daysInMonth=function(){return this.endOf(l).$D},y.$locale=function(){return S[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),a=M(e,t,!0);return a&&(n.$L=a),n},y.clone=function(){return w.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},f}(),$=j.prototype;return x.prototype=$,[["$ms",a],["$s",i],["$m",r],["$H",s],["$W",o],["$M",l],["$y",u],["$D",h]].forEach((function(e){$[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,j,x),e.$i=!0),x},x.locale=M,x.isDayjs=k,x.unix=function(e){return x(1e3*e)},x.en=S[b],x.Ls=S,x.p={},x}()}}]);
//# sourceMappingURL=18.4dd2803a.chunk.js.map