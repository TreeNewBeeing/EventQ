import React from 'react';

export default class Status extends React.Component{
    render(){
        return (
            <div>
                <div style={{
                        width: '80%',
                        height: '600px',
                        // border: '1px solid',
                        margin: '0 auto',}}>
                    <h1 style={{float:'left'}}>March 31</h1>
                    <h1 style={{clear:'both'}} />
                    <hr/>
                    <div style={{
                                width: '80%',
                                margin: '0 auto'}}>
                        <h1 style={{
                            // border: '1px solid',
                            float: 'left',
                            width: '10%'}}>8:00</h1>
                        <h1 style={{clear:'both'}}/>

                        <div style={{
                                width: '80%',
                                height: '100%',
                                margin: '0 auto',}}>
                            <div style={{
                                height: '100%',
                                position: 'absolute',
                                width: '300px',
                                height: '400px',
                                border: '1px solid',
                                padding: '10px'}}>
                                <span>sponser</span>
                                <hr/>
                                <h4>Events Title</h4>
                                <div style={{
                                    margin:'20px auto',
                                    width:'90%',
                                    padding: '10px 5px',
                                    borderRadius:'5px',
                                    border: '1px solid',}}>
                                    adsfdsafsad
                                </div>
                                <div style={{
                                    margin:'20px auto',
                                    width:'90%',
                                    padding: '10px 5px',
                                    borderRadius:'5px',
                                    border: '1px solid',}}>
                                    adsfdsafsad
                                </div>
                                <div style={{
                                    margin:'20px auto',
                                    width:'90%',
                                    padding: '10px 5px',
                                    borderRadius:'5px',
                                    border: '1px solid',}}>
                                    adsfdsafsad
                                </div>

                                <ul>
                                    <li></li>
                                    <li></li>
                                </ul>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        )
    }
}