import react from "react"
import { ErrorMessage } from "formik"
import { Component } from "react"

class app extends Component {

    render() {
        return (
            <div style={{color:"red"}}>
            <ErrorMessage name={this.props.name} />
            <br />
            <br/>

             </div>
        )

    }
}
export default app



// if(this.state.initialValues2.category=="Custom")
// console.log("in2")
// {
//    if(this.state.initialValues2.subCategory.length>0)
//    {
//       for(let i=0 ; i<this.state.initialValues2.subCategory.length ;i++)
//       {  if(i<this.state.initialValues2.subCategory.length-1)
//           urlString.push(this.state.initialValues2.subCategory[i] +"," ) 
//           else
//           urlString.push(this.state.initialValues2.subCategory[i]) 


//       }
      

//    }

// }
// urlString=urlString.join('')
//     console.log(urlString)









// <Row>
// <Col sm={3} className="inputContainer2" >select category / categories</Col>
// <Col sm={9}>
//     <div className="inputContainer form-check " form-check pointer>
//         <Row>
//             <Col sm={3}>
//                 <Field
//                     type="radio"
//                     checked=""
//                     id="Any"
//                     className="float-start form-check-input"
//                 /><label className="float-start form-check-input"
//                     className="float-start " htmlFor="Any"
//                 > Any</label>
//             </Col>
//         </Row>
//         <Row>
//             <Col sm={2}>
//                 <Field
//                     type="radio"
//                     checked=""
//                     id="Any"
//                     className="form-check-input "
//                 /><label className="float-start form-check-input"
//                     className="float-start" htmlFor="Any"
//                 > Custom: </label>
//             </Col>
//             <Col sm={2}>
//                 <Field
//                     type="radio"
//                     checked=""
//                     id="Any"
//                     className="form-check-input"
//                 /><label className="float-start form-check-input"
//                     className="float-start " htmlFor="Any"
//                 > Programming</label>
//             </Col>
//             <Col sm={1}>
//                 <Field
//                     type="radio"
//                     checked=""
//                     id="Any"
//                     className="form-check-input"
//                 /><label className="float-start form-check-input"
//                     className="float-start " htmlFor="Any"
//                 > Misc</label>
//             </Col>
//             <Col sm={1}>
//                 <Field
//                     type="radio"
//                     checked=""
//                     id="Any"
//                     className="form-check-input"
//                 /><label className="float-start form-check-input"
//                     className="float-start " htmlFor="Any"
//                 > Dark</label>
//             </Col>

//             <Col sm={1}>
//                 <Field
//                     type="radio"
//                     checked=""
//                     id="Any"
//                     className="form-check-input"
//                 /><label className="float-start form-check-input"
//                     className="float-start " htmlFor="Any"
//                 > Pun</label>
//             </Col>

//             <Col sm={1}>
//                 <Field
//                     type="radio"
//                     checked=""
//                     id="Any"
//                     className="form-check-input"
//                 /><label className="float-start form-check-input"
//                     className="float-start " htmlFor="Any"
//                 > Spooky</label>
//             </Col>
//             <Col sm={2}>
//                 <Field
//                     type="radio"
//                     checked=""
//                     id="Any"
//                     className="form-check-input"
//                 /><label className="float-start form-check-input"
//                     className="float-start " htmlFor="Any"
//                 > Chrismas</label>
//             </Col>
//         </Row>
//     </div>
// </Col>
// </Row>


// <Row>
// <Col sm={3} className="inputContainer2">Select Language :</Col>
// <Col sm={9}>
//     <div style={{ paddingRight: "850px" }} className="inputContainer float-start" form-check pointer>

//         <select id="dropdown">
//             <option value="N/A">N/A</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//         </select>



//     </div>
// </Col>
// </Row>

// <Row>
// <Col sm={3} className="inputContainer2">Select Flags To Blacklist :</Col>
// <Col sm={9}>
//     <div className="inputContainer" form-check pointer>
//         <Row>
//             <Col sm={2}>( Optional )</Col>
//             <Col sm={1}>
//                 <Field
//                     type="checkbox"
//                     checked=""
//                     id="nsfw"
//                     className="form-check-input "
//                 />
//                 <label className="float-start form-check-input"
//                     className="" htmlFor="nsfw"
//                 >  nsfw </label>
//             </Col>

//             <Col sm={2}>
//                 <Field
//                     type="radio"
//                     checked=""
//                     id="Any"
//                     className="form-check-input "
//                 /><label className="float-start form-check-input"
//                     className="" htmlFor="Any"
//                 > religious </label>
//             </Col>
//             <Col sm={2}>
//                 <Field
//                     type="radio"
//                     checked=""
//                     id="Any"
//                     className="form-check-input "
//                 /><label className="float-start form-check-input"
//                     className="" htmlFor="Any"
//                 > political </label>
//             </Col>
//             <Col sm={1}>
//                 <Field
//                     type="radio"
//                     checked=""
//                     id="Any"
//                     className="form-check-input "
//                 /><label className="float-start form-check-input"
//                     className="" htmlFor="Any"
//                 > racist</label>
//             </Col>
//             <Col sm={1}>
//                 <Field
//                     type="radio"
//                     checked=""
//                     id="Any"
//                     className="form-check-input "
//                 /><label className="float-start form-check-input"
//                     className="" htmlFor="Any"
//                 > sexist </label>
//             </Col>
//             <Col sm={2}>
//                 <Field
//                     type="radio"
//                     checked=""
//                     id="Any"
//                     className="form-check-input "
//                 /><label className="float-start form-check-input"
//                     className="" htmlFor="Any"
//                 > explicit </label>
//             </Col>

//         </Row>
//     </div>
// </Col>
// </Row>


// <Row>
// <Col sm={3} className="inputContainer2">Select At Leat One Joke Type :</Col>
// <Col sm={9}>
//     <div className="inputContainer" form-check pointer>
//         <Row>
//             <Col sm={2}>
//                 <Field
//                     type="checkbox"
//                     checked=""
//                     id="Any"
//                     className="form-check-input "
//                 /><label className="float-start form-check-input"
//                     className="" htmlFor="Any"
//                 > Single </label>
//             </Col>
//             <Col sm={2}>
//                 <Field
//                     type="checkbox"
//                     checked=""
//                     id="Any"
//                     className="form-check-input "
//                 /><label className="float-start form-check-input"
//                     className="" htmlFor="Any"
//                 > Two type </label>
//             </Col>
//         </Row>
//     </div>
// </Col>
// </Row>


// <Row>
// <Col sm={3} className="inputContainer2">Search for a joke that : <br />contains this search string:</Col>
// <Col sm={9}>
//     <div className="inputContainer" form-check pointer>
//         <Field
//             type="text"
//             value=""
//             className="autoWidth"
//         />
//     </div>
// </Col>
// </Row>


// <Row>
// <Col sm={3} className="inputContainer2">Search for a joke <br /> in this ID range :</Col>
// <Col sm={9}>
//     <div className="inputContainer" form-check pointer>
//         <Row>
//             <Col sm={2}> ( optional )</Col>
//             <Col sm={2}>
//                 <label className="float-start "
//                     htmlFor="Any"
//                 > Single</label>
//                 <Field
//                     type="text"
//                     value=""
//                     className="length1"
//                 />
//             </Col>

//             <Col sm={3}>
//                 <label className="float-start "
//                     className="" htmlFor="Any"
//                 > Two type </label>
//                 <Field
//                     type="text"
//                     value=""
//                     className="length1"
//                 />
//             </Col>
//         </Row>
//     </div>
// </Col>
// </Row>


// <Row>
// <Col sm={3} className="inputContainer2">Amount of jokes :</Col>
// <Col sm={9}>
//     <div className="inputContainer" form-check pointer>
//         <Field
//             type="number"
//             value="1"
//             className=""


//         />
//     </div>
// </Col>
// </Row>



