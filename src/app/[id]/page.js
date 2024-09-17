'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import { Row, Col, Card, CardImg } from "react-bootstrap";
import BarraNavegacao from "../components/BarraNavegacao";

export default function page(props) {

    // guarda o valor
    // useState vai guardar objeto {}
    const [users, setUsers] = useState({})

    // puxa a api
    useEffect(() => {
        // puxando função para api
        buscarUsuario()
      }, [])

      async function buscarUsuario() {
        // puxando id da api com props.params.id
        const result = await axios.get("https://dummyjson.com/users/" + props.params.id)
    
        // guarda o valor
        const userRecebido = result.data;
    
        console.log(userRecebido);
    
        // e altera o user
        setUsers(userRecebido);
      }
    
    return (
        <>
        {/* usando a navbar */}
            <BarraNavegacao />
            {/* if do react */}
            {/* se voce tem id do usuario, roda isso */}
      {users.id && (
        <div className="py-4 d-flex justify-content-center align-items-center vh-100">
          <Row>
            <Card style={{ width: '100%' }}>

              {/* Imagem do usuário */}
              <Col md={3}>
                <CardImg src={users.image} />
              </Col>

              {/* Detalhes do usuário */}
              <Col md={9}>
                <p><b>Nome: </b>{users.firstName} {users.lastName}</p>
                <p><b>Idade: </b>{users.age} anos</p>
                <p><b>Data de Nascimento: </b>{users.birthDate}</p>
                <p><b>Gênero: </b>{users.gender}</p>
                <p><b>Email: </b>{users.email}</p>
                <p><b>Telefone: </b>{users.phone}</p>
                <p><b>Universidade:</b> {users.university}</p>
              </Col>
            </Card>

          </Row>
        </div>
      )}
        </>
    )
}