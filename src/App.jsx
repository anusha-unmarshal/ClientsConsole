import React, {useEffect, useState} from "react";
import './App.css';
import Client from "./Client";
import Header from "./Header";
import ClientDetails from "./ClientDetails";

function App() {
    const [status, setStatus] = useState("all");
    const [data,setData]=useState([]);
    const getData=()=>{
        fetch('https://61165a108f38520017a3881e.mockapi.io/clients'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
              }
            }
        )
            .then(function(response){
                  // console.log(response)
                  return response.json();
            })
            .then(function(myJson) {
                // console.log(myJson);
                setData(myJson);
                setStatus("all");
            });
        }
        useEffect(()=>{
            getData()
        },[])

    const [client, setClientData] = useState([]);
    const getClientData=(id)=>{
        fetch('https://61165a108f38520017a3881e.mockapi.io/clients/'+id
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
                // console.log(response)
                return response.json();
            })
            .then(function(myJson) {
                // console.log(myJson);
                setClientData(myJson);
                setStatus("single");
            });
    }

    const DeleteClient=(id)=>{
            fetch('https://61165a108f38520017a3881e.mockapi.io/clients/'+id,
                {
                    method: 'DELETE'
                }
            )
                .then(function(response){
                    console.log(response);
                    return response.json();

                })
                .then(function() {
                    // console.log( id+" Deleted successfully");
                    alert(id + " Deleted successfully");
                });
            getData();
        }
    function previousPage(){
        setStatus("all");
    }

    if (status === "all") {
        return (
            <div>
                <Header
                    onBack = {previousPage}
                    status = {status}
                />
                {data.map(item => {
                    return <Client
                        createdAt={item.createdAt}
                        name={item.name}
                        key={item.id}
                        id={item.id}
                        company={item.company}
                        plan={item.plan}
                        apiKey={item.apiKey}
                        avatar={item.avatar}
                        Ondelete={DeleteClient}
                        OnSelect={getClientData}
                        status={status}
                    />
                })}
            </div>
        );
    }
    else{
        return (
            <div>
            <Header
                onBack = {previousPage}
                status = {status}
                name = {client.name}
            />
                 <ClientDetails
                    createdAt={client.createdAt}
                    name={client.name}
                    key={client.id}
                    id={client.id}
                    company={client.company}
                    plan={client.plan}
                    apiKey={client.apiKey}
                    avatar={client.avatar}
                    Ondelete={DeleteClient}
                    OnSelect={getClientData}
                />
        </div>
        );
    }
}

export default App;
