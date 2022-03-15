import React from "react";
import { Component } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik"
import * as yup from "yup";
import CostomErrorMessege from "./CostomErrorMessege";
import App from "../App.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Dropdown, DropdownButton, Row, Col, Container } from 'react-bootstrap';
import Dropdown1 from "./dropdown"
import { array } from "yup/lib/locale";




class app extends Component {

    constructor() {
        super();
        this.state = {
            Error:false,
            arrayForSingle:false,
            newArray:[],
            totalCount: 0,
            
            languageTotal: {},
            jokeData:[],

            initialValues: {
                category: "Any",
                subCategory: [],
                language: "en",
                flags: [],
                jokeType: ['twopart', 'single'],
                searchString: "",
                idRange: 0,
                from: 0,
                to: 0,
                amounts: 1,

            },

            initialValues2: {
                category: "Any",
                subCategory: [],
                language: "",
                flags: [],
                jokeType: ['twopart', 'single'],
                searchString: "",
                idRange: 0,
                from: 0,
                to: 0,
                amounts: 1,
            },
            url: 'https://v2.jokeapi.dev/joke/Any'



        }
    }
    showArray =[]


    componentDidMount() {

    }


    componentDidUpdate(e) {
        if (this.state.totalCount === 0 && this.props.state?.totalCount > 0) {
            this.setState({ initialValues: { ...this.state.initialValues, to: this.props.state.totalCount, idRange: this.props.state.totalCount } })
        }
    }
    handleMyChange(e, value) {


        let lang = e.target.value

       

        let array = this.props.state?.languageTotal[lang]
        if(array)
            {
                this.setState({
                  initialValues: {
                    ...this.state.initialValues,
                    category: value.category,
                    subCategory: value.subCategory,
                    language: lang,
                    flags: value.flags,
                    jokeType: value.jokeType,
                    searchString: value.searchString,
                    idRange: value.idRange,
                    from: value.from,
                    to: array[1],
                    amounts: value.amounts,
                  },
                });
            }

        
        // this.setState({initialValues : value})
        console.log("hello")
        // this.setState()
    }

    settingValue(e) {

        if (this.state.initialValues2 !== e) {
            this.setState({ initialValues2: e })
            // this.setState({ initialValues: e })
        }
    }
   
  
    async FetchFunction(errors) {
        console.log(Object.keys(errors).length)
       if(Object.keys(errors).length==0)
       {
        await fetch(this.state.url)
        .then(response => response.json())
        .then(resData => {
            console.log(JSON.stringify(resData))
            this.setState({jokeData:resData})
            for(let i=0 ; i<this.state.initialValues2.amounts ; i++)
            {
                this.setState()
                console.log("hello")
            }
            this.setState({newArray:Array(this.state.initialValues2.amounts).fill(false)})
            this.setState({arrayForSingle:false})
            this.setState({Error:false})

            
            
           
        })

       }
       else
       {
           this.setState({Error:true})
       }
    }

    ResetFunction()
    {
        window.location.reload()
    }
    


    render() {

        return (
          <div>
            <Formik
              enableReinitialize={true}
              validationSchema={yup.object({
                category: yup.string(),
                subCategory: yup.array(),
                amounts: yup.number().required("amount").max(10).min(1),
                from: yup
                  .number()
                  .required("from")
                  .min(0)
                  .max(this.state.initialValues2.to),
                to: yup
                  .number()
                  .required("to")
                  .max(this.state.initialValues2.idRange)
                  .min(this.state.initialValues2.from),
              })}
              validate={async (values) => {
                const errors = {};

                if (values.category === "Custom") {
                  if (values.subCategory.length === 0) {
                    errors.category = "category req";
                  }
                }
                if (values.jokeType.length === 0) {
                  console.log("hello");
                  errors.jokeType = "joketype";
                }

                let jokeType = "";
                if (values.jokeType.length == 1) {
                  if (values.jokeType[0] === "single") {
                    jokeType = "single";
                  } else {
                    jokeType = "twopart";
                  }
                }
                let count = 0;
                const Simbol = () => {
                  if (count === 0) {
                    count = 1;
                    return "?";
                  } else {
                    return "&";
                  }
                };

                const url = `https://v2.jokeapi.dev/joke/${
                  values.category === "Any"
                    ? "Any"
                    : values.subCategory.length > 0
                    ? values.subCategory
                    : "Any"
                }${
                  values.language !== "en"
                    ? Simbol() + "lang=" + values.language
                    : ""
                }${
                  values.flags.length !== 0
                    ? Simbol() + "blacklistFlags=" + values.flags
                    : ""
                }${
                  values.jokeType.length === 1
                    ? Simbol() + "type=" + jokeType
                    : ""
                }${
                  values.searchString !== ""
                    ? Simbol() + "contains=" + values.searchString
                    : ""
                }${
                  (values.from > 0 && values.from < values.idRange) ||
                  (values.from > 0 && values.to < values.idRange)
                    ? Simbol() + "idRange=" + values.from + "-" + values.to
                    : ""
                }${
                  values.amounts !== 1
                    ? Simbol() + "amount=" + values.amounts
                    : ""
                }`;
                this.setState({ ...this.state, url: url });

                return errors;
              }}
              initialValues={this.state.initialValues}
              onSubmit={(values) => {
                console.log("hi");

                //   resetForm()
                window.location.reload();
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                formik,
              }) => (
                <div className="formContainer OuterBorder white">
                  <Form onChange={this.settingValue(values)}>
                    {this.state.totalCount === 0 &&
                    this.props.state?.totalCount > 0
                      ? this.setState({
                          totalCount: this.props.state.totalCount,
                        })
                      : ""}
                    <Container className="">
                      {/* {console.log(errors)} */}
                      {/* {console.log(values)} */}

                      <Row>
                        <Col sm={3} className="inputContainer2">
                          select category / categories
                        </Col>
                        <Col sm={9}>
                          <div
                            className={
                              errors.category
                                ? "inputContainer redBorder form-check "
                                : "inputContainer form-check "
                            }
                          >
                            <Row>
                              <Col sm={3}>
                                <Field
                                  type="radio"
                                  checked={values.category == "Any"}
                                  id="Any"
                                  name="category"
                                  data-testid="Any"
                                  value="Any"
                                  onChange={handleChange}
                                  className="float-start form-check-input"
                                />
                                <label
                                  className = "float-start "
                                  htmlFor="Any"
                                >
                                  {" "}
                                  Any
                                </label>
                              </Col>
                            </Row>
                            <Row className="">
                              <Col sm={2}>
                                {/* {this.state.categaries1} */}
                                <Field
                                  type="radio"
                                  checked={values.category === "Custom"}
                                  value="Custom"
                                  name="category"
                                  id="Custom"
                                  data-testid="Custom"
                                  onChange={handleChange}
                                  className="form-check-input "
                                />
                                <label
                                  className="float-start"
                                  htmlFor="Custom"
                                >
                                  {" "}
                                  Custom:{" "}
                                </label>
                              </Col>
                              <Col sm={2}>
                                <Field
                                  type="checkbox"
                                  checked={values.subCategory.includes(
                                    "Programming"
                                  )}
                                  name="subCategory"
                                  onChange={handleChange}
                                  id="pro"
                                  data-testid="Programming"
                                  value="Programming"
                                  disabled={values.category !== "Custom"}
                                  className="form-check-input"
                                />
                                <label
                                  className={
                                    values.category === "Custom"
                                      ? "float-start"
                                      : "float-start gray"
                                  }
                                  htmlFor="pro"
                                >
                                  {" "}
                                  Programming
                                </label>
                              </Col>
                              <Col sm={1}>
                                <Field
                                  type="checkbox"
                                  checked={values.subCategory.includes("Misc")}
                                  name="subCategory"
                                  onChange={handleChange}
                                  disabled={values.category !== "Custom"}
                                  value="Misc"
                                  id="mic"
                                  data-testid="Misc"
                                  className="form-check-input"
                                />
                                <label
                                  className={
                                    values.category === "Custom"
                                      ? "float-start"
                                      : "float-start gray"
                                  }
                                  htmlFor="mic"
                                >
                                  {" "}
                                  Misc
                                </label>
                              </Col>
                              <Col sm={1}>
                                <Field
                                  type="checkbox"
                                  checked={values.subCategory.includes("Dark")}
                                  name="subCategory"
                                  onChange={handleChange}
                                  disabled={values.category !== "Custom"}
                                  id="dark"
                                  data-testid="Dark"
                                  value="Dark"
                                  className="form-check-input"
                                />
                                <label
                                  className={
                                    values.category === "Custom"
                                      ? "float-start"
                                      : "float-start gray"
                                  }
                                  htmlFor="dark"
                                >
                                  {" "}
                                  Dark
                                </label>
                              </Col>

                              <Col sm={1}>
                                <Field
                                  type="checkbox"
                                  checked={values.subCategory.includes("Pun")}
                                  name="subCategory"
                                  onChange={handleChange}
                                  id="pun"
                                  value="Pun"
                                  data-testid="Pun"
                                  disabled={values.category !== "Custom"}
                                  className="form-check-input"
                                />
                                <label
                                  className={
                                    values.category == "Custom"
                                      ? "float-start"
                                      : "float-start gray"
                                  }
                                  htmlFor="pun"
                                >
                                  {" "}
                                  Pun
                                </label>
                              </Col>

                              <Col sm={1}>
                                <Field
                                  type="checkbox"
                                  checked={values.subCategory.includes(
                                    "Spooky"
                                  )}
                                  name="subCategory"
                                  onChange={handleChange}
                                  disabled={values.category !== "Custom"}
                                  id="spok"
                                  data-testid="Spok"
                                  value="Spooky"
                                  className="form-check-input"
                                />
                                <label
                                  className={
                                    values.category == "Custom"
                                      ? "float-start"
                                      : "float-start gray"
                                  }
                                  htmlFor="spok"
                                >
                                  {" "}
                                  Spooky
                                </label>
                              </Col>
                              <Col sm={2}>
                                <Field
                                  type="checkbox"
                                  checked={values.subCategory.includes(
                                    "Chrismas"
                                  )}
                                  name="subCategory"
                                  onChange={handleChange}
                                  disabled={values.category !== "Custom"}
                                  id="chris"
                                  data-testid="Chrismas"
                                  value="Chrismas"
                                  className="form-check-input"
                                />
                                <label
                                  className={
                                    values.category == "Custom"
                                      ? "float-start"
                                      : "float-start gray"
                                  }
                                  htmlFor="chris"
                                >
                                  {" "}
                                  Chrismas
                                </label>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col sm={3} className="inputContainer2">
                          Select Language :
                        </Col>
                        <Col sm={9}>
                          <div
                            style={{ paddingRight: "780px" }}
                            className="inputContainer float-start"
                          >
                            <select
                              data-testid="Language"
                              id="dropdown"
                              onChange={(e) => {
                                handleChange(e);
                                this.handleMyChange(e, values);
                              }}
                              name="language"
                            >
                              <option data-testid="select-option" value="en">
                                en-English
                              </option>
                              <option data-testid="select-option" value="cs">
                                cs-Czech
                              </option>
                              <option data-testid="select-option" value="de">
                                de-German
                              </option>
                              <option data-testid="select-option" value="es">
                                es-Spanish
                              </option>
                              <option data-testid="select-option" value="fr">
                                fr-French
                              </option>
                              <option data-testid="select-option" value="pt">
                                pt-Portuguese
                              </option>
                            </select>
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col sm={3} className="inputContainer2">
                          Select Flags To Blacklist :
                        </Col>
                        <Col sm={9}>
                          <div className="inputContainer">
                            <Row>
                              <Col sm={2}>( Optional )</Col>
                              <Col sm={1}>
                                <Field
                                  type="checkbox"
                                  checked={values.flags.includes("nsfw")}
                                  name="flags"
                                  onChange={handleChange}
                                  id="nsfw"
                                  value="nsfw"
                                  className="form-check-input "
                                />
                                <label
                                  className=""
                                  htmlFor="nsfw"
                                >
                                  {" "}
                                  nsfw{" "}
                                </label>
                              </Col>

                              <Col sm={2}>
                                <Field
                                  type="checkbox"
                                  checked={values.flags.includes("religious")}
                                  name="flags"
                                  onChange={handleChange}
                                  id="reli"
                                  value="religious"
                                  className="form-check-input "
                                />
                                <label
                                  className=""
                                  htmlFor="reli"
                                >
                                  {" "}
                                  religious{" "}
                                </label>
                              </Col>
                              <Col sm={2}>
                                <Field
                                  type="checkbox"
                                  checked={values.flags.includes("political")}
                                  name="flags"
                                  onChange={handleChange}
                                  id="poli"
                                  value="political"
                                  className="form-check-input"
                                />
                                <label
                                  className=""
                                  htmlFor="poli"
                                >
                                  {" "}
                                  political{" "}
                                </label>
                              </Col>
                              <Col>
                                <Field
                                  type="checkbox"
                                  checked={values.flags.includes("racist")}
                                  name="flags"
                                  onChange={handleChange}
                                  id="rec"
                                  value="racist"
                                  className="form-check-input "
                                />
                                <label
                                  className=""
                                  htmlFor="rac"
                                >
                                  {" "}
                                  racist
                                </label>
                              </Col>
                              <Col>
                                <Field
                                  type="checkbox"
                                  checked={values.flags.includes("sexist")}
                                  name="flags"
                                  onChange={handleChange}
                                  id="sex"
                                  value="sexist"
                                  className="form-check-input "
                                />
                                <label
                                  className=""
                                  htmlFor="sex"
                                >
                                  {" "}
                                  sexist{" "}
                                </label>
                              </Col>
                              <Col sm={2}>
                                <Field
                                  type="checkbox"
                                  checked={values.flags.includes("explicit")}
                                  name="flags"
                                  onChange={handleChange}
                                  id="exp"
                                  value="explicit"
                                  className="form-check-input "
                                />
                                <label
                                  className=""
                                  htmlFor="exp"
                                >
                                  {" "}
                                  explicit{" "}
                                </label>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col sm={3} className="inputContainer2">
                          Select At Leat One Joke Type :
                        </Col>
                        <Col sm={9}>
                          <div
                            data-testid="jokeTypeDiv"
                            className={
                              errors.jokeType
                                ? "inputContainer redBorder"
                                : "inputContainer "
                            }
                          >
                            <Row>
                              <Col sm={2}>
                                <Field
                                  type="checkbox"
                                  checked={values.jokeType.includes("single")}
                                  name="jokeType"
                                  id="single"
                                  onChange={handleChange}
                                  value="single"
                                  data-testid="single"
                                  className="form-check-input "
                                />
                                <label
                                  className=""
                                  htmlFor="single"
                                >
                                  {" "}
                                  Single{" "}
                                </label>
                              </Col>
                              <Col sm={2}>
                                <Field
                                  type="checkbox"
                                  checked={values.jokeType.includes("twopart")}
                                  onChange={handleChange}
                                  name="jokeType"
                                  id="two"
                                  data-testid="twopart"
                                  value="twopart"
                                  className="form-check-input "
                                />
                                <label
                                  className=""
                                  htmlFor="two"
                                >
                                  {" "}
                                  Two type{" "}
                                </label>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col sm={3} className="inputContainer2">
                          Search for a joke that : <br />
                          contains this search string:
                        </Col>
                        <Col sm={9}>
                          <div className="inputContainer">
                            <Field
                              type="text"
                              autoComplete="off"
                              name="searchString"
                              className="autoWidth"
                            />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col sm={3} className="inputContainer2">
                          Search for a joke <br /> in this ID range :
                        </Col>
                        <Col sm={9}>
                          <div
                            className={
                              errors.from || errors.to
                                ? "inputContainer redBorder"
                                : "inputContainer "
                            }
                          >
                            <Row>
                              <Col sm={2}> ( optional )</Col>
                              <Col sm={2}>
                                <label className="float-start " htmlFor="">
                                  {" "}
                                  From:{" "}
                                </label>
                                <Field
                                  type="number"
                                  name="from"
                                  min={0}
                                  onChange={handleChange}
                                  max={values.to}
                                  className="length1"
                                />
                              </Col>

                              <Col sm={3}>
                                <label
                                  className=""
                                  htmlFor=""
                                >
                                  {" "}
                                  To:{" "}
                                </label>
                                <Field
                                  type="number"
                                  name="to"
                                  data-testid="toNumber"
                                  min={values.from}
                                  max={values.idRange}
                                  className="length1"
                                />
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col sm={3} className="inputContainer2">
                          Amount of jokes :
                        </Col>
                        <Col sm={9}>
                          <div
                            className={
                              errors.amounts
                                ? "inputContainer redBorder"
                                : "inputContainer "
                            }
                          >
                            <Field
                              name="amounts"
                              type="number"
                              data-testid="AmountofJoke"
                              min={1}
                              max={10}
                              value={values.amounts}
                            />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col sm={3} className="border2">
                          <Col className="inputContainer2" data-testid="url">
                            {this.state.url}
                          </Col>
                          <Row>
                            {" "}
                            <Col className="inputContainer2">
                              <button
                                type="button"
                                onClick={() => this.ResetFunction()}
                              >
                                Reset
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  this.FetchFunction(errors);
                                }}
                              >
                                Send Url
                              </button>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row className="OuterBorder2">
                        {<h3>Reasult :</h3>}

                        {this.state.jokeData &&
                          (values.amounts == 1 ? (
                            this.state.jokeData.type === "single" ? (
                              <h4>{this.state.jokeData.joke}</h4>
                            ) : (
                              <>
                                <h4>{this.state.jokeData.setup}</h4>
                                <br />
                                {this.state.arrayForSingle == false &&
                                this.state.jokeData.delivery ? (
                                  <Button
                                    variant="outline-info "
                                    onClick={() =>
                                      this.setState({ arrayForSingle: true })
                                    }
                                    style={{ width: "150px" }}
                                  >
                                    {" "}
                                    Show More{" "}
                                  </Button>
                                ) : (
                                  <h4>{this.state.jokeData.delivery}</h4>
                                )}
                              </>
                            )
                          ) : (
                            ""
                          ))}
                        {this.state.jokeData.jokes &&
                          (this.state.jokeData.amount > 1
                            ? this.state.jokeData.jokes.map((itms, index) => {
                                return itms.type == "single" ? (
                                  <>
                                    <h4>{itms.joke}</h4>{" "}
                                    <h4 className="gray">
                                      __________________________________________________
                                    </h4>
                                  </>
                                ) : (
                                  <>
                                    <br />
                                    <h4>{itms.setup}</h4>
                                    <br />
                                    {this.state.newArray[index] == true ? (
                                      <h4>{itms.delivery}</h4>
                                    ) : (
                                      <Button
                                        variant="outline-info "
                                        style={{ width: "150px" }}
                                        onClick={() =>
                                          this.setState(() => {
                                            let temp = this.state.newArray;
                                            temp[index] = true;
                                            return { newArray: temp };
                                          })
                                        }
                                      >
                                        Show More
                                      </Button>
                                    )}{" "}
                                    <h4 className="gray">
                                      __________________________________________________
                                    </h4>
                                  </>
                                );
                              })
                            : "hi")}
                        {this.state.Error == true ? (
                          <>
                            <h4>Error :</h4> <br />
                            <h4>
                              One or more of the parameters you specified are
                              invalid.
                              <br />
                              They are outlined with a red border.
                              <br />
                              <br />
                              Please correct the parameters and try again.
                            </h4>
                          </>
                        ) : (
                          ""
                        )}
                      </Row>
                    </Container>
                  </Form>
                </div>
              )}
            </Formik>
          </div>
        );
    }
}
export default app

