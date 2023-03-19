import React, { useState, useEffect } from "react";
import { Input, Button, Select, Checkbox } from 'antd';
import { connect } from 'react-redux';
import { FormLable } from "../../../elements/form/FormLable"
import { changeValue, searchDoctor } from '../../../../actions/doctorActions';
const { Search } = Input;

const country =
    [
        { label: "Sri lanka", value: "Sri lanka" },
        { label: "India", value: "India" },
  ]
const distric = [
    { label: "Mumbai", value: "Mumbai" },
    { label: "Colombo", value: "Colombo" },
    { label: "Gampaha", value: "Gampaha" },
] 
function Filter(props) {

    const [selectPerson, setSelectPerson] = useState(1)

    function onChangeSpeciality(checkedValues) {
    }

    function search() {
        props.searchDoctor(props.searchKey)
    }


    const valueChangeFunction = (data, field) => {

        props.changeValue({
            field: field,
            value: data,
        })
    }

    const [plainOptions, setplainOptions] = useState([
        "Accident",
        "Addiction Medicine",
        "Allergy",

    ]);
    const [searchTerm, setSearchTerm] = useState();
    const [searchResult, setSearchResult] = useState();
    const filterCheckbox = e => {
        const searchVal = e.target.value;
        setSearchTerm(searchVal);
        const result = plainOptions.filter(arrayVal => {
            return arrayVal.toLowerCase().startsWith(searchVal.toLowerCase());
        });
        setSearchResult(result);
    };

    useEffect(() => {

    }, [props]);



    return (

        <div className="treatment-inquery">


            <div className="horizontal-form-item mt3">
                <div className="upper">
                    <FormLable title='Search' required={false} />
                </div>
                <div className="lower">
                    <Search onChange={(e) => { valueChangeFunction(e.target.value, 'name') }} onSearch={search} className="input-custom" size="large" placeholder="Search" />
                </div>
            </div>
            <div className="horizontal-form-item mt3">
                <div className="upper">
                    <FormLable title='Country' required={false} />
                </div>
                <div className="lower">
                    <Select
                        allowClear
                        style={{
                            width: '100%',
                        }}
                        onChange={(e) => { valueChangeFunction(e, 'country') }}
                        placeholder="Please select"
                        className="input-custom" size="large"
                        options={country}
                    />
                </div>
            </div>
            <div className="horizontal-form-item mt3">
                <div className="upper">
                    <FormLable title='District / State' required={false} />
                </div>
                <div className="lower">
                    <Select
                        allowClear
                        style={{
                            width: '100%',
                        }}
                        onChange={(e) => { valueChangeFunction(e, 'distric') }}
                        placeholder="Please select"
                        className="input-custom" size="large"
                        options={distric}
                    />
                </div>
            </div>
            <div className="horizontal-form-item mt3 border-1">
                <div className="upper">
                    <FormLable title='Speciality' required={false} />
                </div>
                <div className="lower">
                    <div>
                        <Input
                            placeholder="Search"
                            className="checkbox-search"
                            onChange={e => filterCheckbox(e)}
                        />
                        <div className="checkbox-group">
                            {
                                searchTerm ?
                                    searchResult ?
                                        searchResult.map((e) => (
                                            <div>
                                                <Checkbox onChange={onChangeSpeciality}>{e}</Checkbox>
                                            </div>
                                        )) : null :
                                    plainOptions ?
                                        plainOptions.map((e) => (
                                            <div>
                                                <Checkbox onChange={onChangeSpeciality}>{e}</Checkbox>
                                            </div>
                                        )) : null
                            }

                        </div>

                    </div>
                </div>
            </div>


        </div>

    );
}



const mapStateToProps = state => ({
    searchKey: state.doctors.searchKey,
})

export default connect(mapStateToProps, {
    changeValue, searchDoctor
})(Filter);