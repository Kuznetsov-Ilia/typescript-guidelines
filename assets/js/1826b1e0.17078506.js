"use strict";(self.webpackChunkgithub_page=self.webpackChunkgithub_page||[]).push([[227],{6602:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(5773),o=n(808),i=(n(7378),n(5318)),r=["components"],s={slug:"2022-typescript-is-abstraction",title:"TypeScript is ... an abstraction",authors:["unional"],tags:["typescript"]},l=void 0,p={permalink:"/typescript-guidelines/blog/2022-typescript-is-abstraction",source:"@site/blog/2022-05-14-what.mdx",title:"TypeScript is ... an abstraction",description:"[TypeScript 4.7] is just around the corner.",date:"2022-05-14T00:00:00.000Z",formattedDate:"May 14, 2022",tags:[{label:"typescript",permalink:"/typescript-guidelines/blog/tags/typescript"}],readingTime:3.395,truncated:!1,authors:[{name:"Homa Wong (unional)",title:"A Mad Engineer",url:"https://github.com/unional",imageURL:"https://github.com/unional.png",key:"unional"}],frontMatter:{slug:"2022-typescript-is-abstraction",title:"TypeScript is ... an abstraction",authors:["unional"],tags:["typescript"]}},u={authorsImageUrls:[void 0]},c=[{value:"TypeScript is an abstraction",id:"typescript-is-an-abstraction",level:2},{value:"Conclusion",id:"conclusion",level:2}],h={toc:c};function d(t){var e=t.components,n=(0,o.Z)(t,r);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-7-rc/"},"TypeScript 4.7")," is just around the corner."),(0,i.kt)("p",null,"I feel like it is a good time for me to update this TypeScript guidelines\nwith what I have learn over the years and how am I using it nowadays."),(0,i.kt)("p",null,"As you can see,\nI've reorganzied the repository and added this GitHub page\nto make it easier to share the knowledge."),(0,i.kt)("p",null,"In these blog posts,\nI'm going to share the bits and tips that I learned every day.\nEventually this information will be incorporated into the guidelines."),(0,i.kt)("p",null,"To kick things off, I'm going to talk about what TypeScript is in 2022?"),(0,i.kt)("p",null,"No no, not about the history of TypeScript."),(0,i.kt)("p",null,"It's about how I look at TypeScript and how I use it."),(0,i.kt)("p",null,"It's about when I follow the rules and when I break them."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"I know all the rules, and then I know how to break 'em")),(0,i.kt)("h2",{id:"typescript-is-an-abstraction"},"TypeScript is an abstraction"),(0,i.kt)("p",null,"Programming language is an abstraction."),(0,i.kt)("p",null,"The abstraction I'm talking about is not the abstraction of defining an interface or class or inheritance."),(0,i.kt)("p",null,"It's about the code you wrote, the text you typed in the ",(0,i.kt)("inlineCode",{parentName:"p"},".ts")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".tsx")," file."),(0,i.kt)("p",null,"It is an abstraction over the actual binary code executed by the JavaScript engine."),(0,i.kt)("p",null,"A good abstraction emphasizes the important but sometimes has a cost of skipping over some details."),(0,i.kt)("p",null,"For example, the digital zeros and ones are an abstraction over the analog electrical currents."),(0,i.kt)("p",null,"Most of the time, at least in the sense of modern computing,\nmissing the details on the different levels of electrical currents is a good thing.\nAnd we as a programmer don't ever need to think about it."),(0,i.kt)("p",null,"But to the eye of hardware engineer,\nit is not something they can ignore because there are physical rules they have to follow,\nand there are actual consequences when putting two wires too close to each other."),(0,i.kt)("p",null,"The abstraction of programming language is the same.\nIt is good for most cases, but at some point it will start to breakdown."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"rust")," is a good example of this.\nIts ownership model guarantee memory-safety and thread-safety.\nBut there are rare cases you need to break the rules thus there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"unsafe")," keyword for it."),(0,i.kt)("p",null,"For ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript"),', it is not designed to be a 100% sounded language.\nThat means you will run into those "rare" cases a lot more often.'),(0,i.kt)("p",null,"You can learn more about soundness ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/type-compatibility.html#a-note-on-soundness"},"here")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/play?strictFunctionTypes=false#example/soundness"},"here"),"."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"So what should you do? Embrace it."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"unsafe")," keyword in ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),".\nWhile you should avoid using ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," in most cases,\nit is often enough that your tool chain should not prevent or punish you from using it."),(0,i.kt)("p",null,"You might think,"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\"hey, I'm working in a team and I don't want my team members who are less familiar with TypeScript to abuse the usage of ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),'."')),(0,i.kt)("p",null,"Yes, that is a legit concern,\nand you can make your own judgement for your circumstances."),(0,i.kt)("p",null,"My personal experience is that the number of times I have to break the rules are common enough that making exceptions for the tools (e.g. adding ",(0,i.kt)("inlineCode",{parentName:"p"},"// eslint ignore")," comments) clutter the code and make the code harder to read."),(0,i.kt)("p",null,"My approach is to rely on unit tests and code reviews to make sure the usage of ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," are in check."),(0,i.kt)("p",null,"Also, defining the correct type is not always easy and can take significant amount of time.\nIf you are working under a schedule, you might not have time to do that."),(0,i.kt)("p",null,"Another point to make is that since ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," is constantly improving,\nif you build some complex types, it might work in one version and break in another version."),(0,i.kt)("p",null,"ASK ME HOW I KNOW IT."),(0,i.kt)("p",null,"Of course, I'm not saying allowing your code litters with ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," and call it a day.\nYou should keep track on those usages and clean it up when you get a chance to."),(0,i.kt)("p",null,"Converting ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," back to a proper type improves efficiency.\nAs that is why we use ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript"),"."),(0,i.kt)("p",null,"And you may discover some bugs along the way."))}d.isMDXComponent=!0}}]);