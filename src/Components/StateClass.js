import React, { Component } from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
class StateClass extends Component {
    state = {
        formData: {
            FullName: '',
            MobileNo: '',
        }
    }

    //#region component
    componentDidMount() {
        document.getElementById('FullName').focus()
    }
    //#endregion

    //#region handle
    handleOnChange = (e) => {
        this.setState({
            formData: { ...this.state.formData, [e.target.name]: e.target.value }
        })
    }
    //#endregion

    render() {
        return (
            <div>
                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                    <Grid item>
                        <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={2} marginTop={0}>
                            <h1>(3)State Class</h1>
                            <Grid item>
                                <TextField
                                    id="FullName"
                                    label="FullName"
                                    value={this.state.formData.FullName}
                                    handleOnChange={this.handleOnChange}
                                    maxLength={100}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="MobileNo"
                                    label="MobileNo"
                                    value={this.state.formData.MobileNo}
                                    handleOnChange={this.handleOnChange}
                                    maxLength={10}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default StateClass