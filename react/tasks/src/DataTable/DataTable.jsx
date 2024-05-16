import React from "react";
import axios from "axios";
import { Edit } from "./Edit";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { Add } from "./Add";

export class DataTable extends React.Component {
    state = {
        people: [],
        searchWord: '',
        showModal: false,
        selectedPerson: ''
    }
    getData = async() => {
        let url = 'http://localhost:3002/people';
        let response = await axios.get(url);
        this.setState({
            people: response.data
        })
    }

    async componentDidMount() {
        await this.getData();
    }

    searchPerson = (event) => {
        this.setState({
            searchWord: event.target.value
        });
    }

    deletePerson = async(id) => {
        let url = `http://localhost:3002/people/${id}`;
        await fetch(url, {
            method: 'DELETE'
        });
        await this.getData();
    }

    addPerson = async(newPerson) => {
        let url = 'http://localhost:3002/people';
        await axios.post(url, newPerson);
        await this.getData();
    }

    openModal = (person) => {
        this.setState({
            showModal: true,
            selectedPerson: person
        })
    }

    closeModal = () => {
        this.setState({
            showModal: false
        })
    }

    editPerson = async(person) => {
        let url = `http://localhost:3002/people/${this.state.selectedPerson.id}`;
        await axios.put(url, person)
        await this.getData();
    }

    render() {
        let filteredPeople = this.state.people.filter(person => {
            return person.name.toLowerCase().indexOf(this.state.searchWord.toLowerCase()) !== -1;
        });
        return (
            <Router>
                <Route path='/' exact>
                    <div className='d-flex flex-column gap-5'>
                        <div>
                            <Link to='/add' className='btn btn-dark'>
                                Add Person
                            </Link>
                        </div>
                        <input type="search" className='form-control' placeholder="axtar..."
                               onChange={(e) => this.searchPerson(e)}/>
                        <table className='table table-dark table-bordered table-hover text-center'>
                            <thead>
                            <tr>
                                <th scope='col'>
                                    №
                                </th>
                                <th scope='col'>
                                    Name
                                </th>
                                <th scope='col'>
                                    Surname
                                </th>
                                <th scope='col'>
                                    Age
                                </th>
                                <th scope='col'>
                                    Edit
                                </th>
                                <th scope='col'>
                                    Remove
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {filteredPeople.map((person, index) => {
                                return (
                                    <tr key={person.id}>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            {person.name}
                                        </td>
                                        <td>
                                            {person.surname}
                                        </td>
                                        <td>
                                            {person.age}
                                        </td>
                                        <td>
                                            <button className="btn btn-outline-primary"
                                                    onClick={() => this.openModal(person)}>
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </button>
                                        </td>
                                        <td>
                                            <button className="btn btn-outline-danger"
                                                    onClick={() => this.deletePerson(person.id)}>
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                    {this.state.showModal ? (
                        <Edit edit={person => this.editPerson(person)} person={this.state.selectedPerson}
                              closeModal={this.closeModal}/>) : null}
                </Route>
                <Route path='/add' render={({history}) => {
                    return <Add add={newPerson => {
                        this.addPerson(newPerson);
                        history.push('/');
                    }}/>
                }}/>
            </Router>
        )
    }
}