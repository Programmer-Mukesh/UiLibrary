"use strict";(self.webpackChunkmy_component_library=self.webpackChunkmy_component_library||[]).push([[256],{"./src/stories/Button.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Ghost:()=>Ghost,Loading:()=>Loading,Primary:()=>Primary,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});var LoadingButton=__webpack_require__("./node_modules/@mui/lab/LoadingButton/LoadingButton.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),Save=__webpack_require__("./node_modules/@mui/icons-material/Save.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function CustomButton(_ref){let{label,backgroundColor="red",size="md",handleClick,color,isLoading}=_ref,scale=1;"sm"===size&&(scale=.75),"lg"===size&&(scale=1.5);const style={backgroundColor,padding:"".concat(.5*scale,"rem ").concat(1*scale,"rem"),color,fontWeight:"bold"};return isLoading?(0,jsx_runtime.jsx)(LoadingButton.Z,{loading:!0,sx:style,loadingPosition:"start",startIcon:(0,jsx_runtime.jsx)(Save.Z,{}),variant:"outlined",children:label}):(0,jsx_runtime.jsx)(Button.Z,{onClick:handleClick,sx:style,disabled:"Ghost"===label,children:label})}CustomButton.__docgenInfo={description:"",methods:[],displayName:"CustomButton",props:{backgroundColor:{defaultValue:{value:'"red"',computed:!1},description:"",type:{name:"string"},required:!1},size:{defaultValue:{value:'"md"',computed:!1},description:"",type:{name:"enum",value:[{value:'"sm"',computed:!1},{value:'"md"',computed:!1},{value:'"lg"',computed:!1}]},required:!1},label:{description:"",type:{name:"string"},required:!1},handleClick:{description:"",type:{name:"func"},required:!1},color:{description:"",type:{name:"string"},required:!1},isLoading:{description:"",type:{name:"bool"},required:!1}}};const Components_CustomButton=CustomButton;var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_Secondary$parameters,_Secondary$parameters2,_Secondary$parameters3,_Ghost$parameters,_Ghost$parameters2,_Ghost$parameters2$do,_Loading$parameters,_Loading$parameters2,_Loading$parameters2$;const Button_stories={title:"Components/Button",component:Components_CustomButton,argTypes:{handleClick:{action:"handleClick"}}},Template=args=>(0,jsx_runtime.jsx)(Components_CustomButton,{...args}),Primary=Template.bind({});Primary.args={backgroundColor:"blue",label:"Primary",size:"md",isLoading:!1,color:"white"};const Secondary=Template.bind({});Secondary.args={backgroundColor:"red",label:"Secondary",size:"md",isLoading:!1,color:"white"};const Ghost=Template.bind({});Ghost.args={backgroundColor:"grey",label:"Ghost",size:"md",isLoading:!1,color:"#dfdfdf"};const Loading=Template.bind({});Loading.args={backgroundColor:"red",label:"Loading",size:"md",isLoading:!0,color:"white"},Primary.parameters={...Primary.parameters,docs:{...null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs,source:{originalSource:"args => <CustomButton {...args} />",...null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source}}},Secondary.parameters={...Secondary.parameters,docs:{...null===(_Secondary$parameters=Secondary.parameters)||void 0===_Secondary$parameters?void 0:_Secondary$parameters.docs,source:{originalSource:"args => <CustomButton {...args} />",...null===(_Secondary$parameters2=Secondary.parameters)||void 0===_Secondary$parameters2||null===(_Secondary$parameters3=_Secondary$parameters2.docs)||void 0===_Secondary$parameters3?void 0:_Secondary$parameters3.source}}},Ghost.parameters={...Ghost.parameters,docs:{...null===(_Ghost$parameters=Ghost.parameters)||void 0===_Ghost$parameters?void 0:_Ghost$parameters.docs,source:{originalSource:"args => <CustomButton {...args} />",...null===(_Ghost$parameters2=Ghost.parameters)||void 0===_Ghost$parameters2||null===(_Ghost$parameters2$do=_Ghost$parameters2.docs)||void 0===_Ghost$parameters2$do?void 0:_Ghost$parameters2$do.source}}},Loading.parameters={...Loading.parameters,docs:{...null===(_Loading$parameters=Loading.parameters)||void 0===_Loading$parameters?void 0:_Loading$parameters.docs,source:{originalSource:"args => <CustomButton {...args} />",...null===(_Loading$parameters2=Loading.parameters)||void 0===_Loading$parameters2||null===(_Loading$parameters2$=_Loading$parameters2.docs)||void 0===_Loading$parameters2$?void 0:_Loading$parameters2$.source}}};const __namedExportsOrder=["Primary","Secondary","Ghost","Loading"]}}]);