"use strict";(self.webpackChunkmy_component_library=self.webpackChunkmy_component_library||[]).push([[290],{"./src/stories/Modal.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Modal_stories});var react=__webpack_require__("./node_modules/react/index.js"),Modal=__webpack_require__("./node_modules/@mui/material/Modal/Modal.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const style={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},CustomModal=_ref=>{let{open,handleClose,padding,margin,display,isDraggable,heading,body,...props}=_ref;return(0,jsx_runtime.jsx)(Modal.Z,{open,onClose:handleClose,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,jsx_runtime.jsxs)(Box.Z,{sx:style,draggable:!0,children:[(0,jsx_runtime.jsx)(Typography.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:heading}),(0,jsx_runtime.jsx)(Typography.Z,{id:"modal-modal-description",sx:{mt:2},children:body})]})})};CustomModal.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};const Components_CustomModal=CustomModal;var _Default$parameters,_Default$parameters2,_Default$parameters2$,Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js");const Modal_stories={title:"Components/CustomModal",component:Components_CustomModal,argTypes:{padding:{control:"text"},margin:{control:"text"},display:{control:"text"}}},Default=(args=>{const[open,setOpen]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.Z,{variant:"contained",onClick:()=>{setOpen(!0)},children:"Open Modal"}),(0,jsx_runtime.jsx)(Components_CustomModal,{...args,open,handleClose:()=>{setOpen(!1)},children:args.children})]})}).bind({});Default.args={padding:"16px",margin:"16px",display:"block",isDraggable:!1,heading:"heading",body:"This is the modal content"},Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:'args => {\n  const [open, setOpen] = useState(false);\n  const handleOpen = () => {\n    setOpen(true);\n  };\n  const handleClose = () => {\n    setOpen(false);\n  };\n  return <>\r\n      <Button variant="contained" onClick={handleOpen}>\r\n        Open Modal\r\n      </Button>\r\n      <CustomModal {...args} open={open} handleClose={handleClose}>\r\n        {args.children}\r\n      </CustomModal>\r\n    </>;\n}',...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source}}};const __namedExportsOrder=["Default"]}}]);