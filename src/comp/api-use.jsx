import React, {Component} from 'react';

class ApiUse extends Component {
    constructor() {
        super();
        this.kisiGetir = this.kisiGetir.bind(this);
        this.state = {
            kisi: [],
        };
    }

    componentDidMount() {
        this.kisiGetir();
    }

    kisiGetir(){
        fetch('https://randomuser.me/api/?results=1')
            .then(sonuclar => {
                return sonuclar.json();
            }).then(veri => {
            let kisi = veri.results.map((bilgi, i) => {
                return (
                    <div key={i} className="card">
                        <img src={bilgi.picture.large} className="card-img-top" alt={bilgi.name.first} />
                        <div className="card-body">
                            <h5 className="card-title">{bilgi.name.first} {bilgi.name.last} ({bilgi.dob.age})</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{bilgi.location.city}, {bilgi.location.state}</li>
                            <li className="list-group-item">{bilgi.email}</li>
                            <li className="list-group-item">{bilgi.cell}</li>
                        </ul>
                        <div className="card-body">
                            <button type="button" className="btn btn-primary" onClick={this.kisiGetir}>Yeni Kişi Getir</button>
                        </div>
                    </div>
                )
            })
            this.setState({kisi: kisi});
            console.log("state", this.state.kisi);
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                        </div>
                        <div className="col-sm-3">
                            {this.state.kisi}
                        </div>
                        <div className="col-sm">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ApiUse;