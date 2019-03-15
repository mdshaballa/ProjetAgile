import { Component, State } from '@stencil/core';

@Component({
    tag: "spi-ue",
    styleUrl: "spi-ue.scss"
})
export class SpiUe {
    
    @State() posts: any = "";
    @State() posts2: any ="";

    componentWillLoad() {
        return fetch('http://app-aead2b86-a4bb-4a14-9b97-cd0d09d78ae6.cleverapps.io/uniteEnseignement')
        .then(response => response.json())
        .then(data => {
        this.posts = data;
        console.log(this.posts)
        });
        }

        componentDidLoad() {
            this.modifyselection();
        }

    modifyselection( ) {   
        let rows = document.getElementsByTagName('tr');
        for (var i = 1; i < rows.length; i++) {
            let element = rows[i];
            element.onmouseover = () => element.classList.toggle('is-selected');
            element.onmouseout = () => element.classList.toggle('is-selected');
        }
    }

    deletefnct(pst){
        let url='http://app-aead2b86-a4bb-4a14-9b97-cd0d09d78ae6.cleverapps.io/uniteEnseignement'
        return fetch((url),{
        method:'DELETE',headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pst),
          }).then(() => {alert("Deleted !!");
          location.href='/list';
        }).catch((error) => {
            alert(' Error ! please retry !! ');
            console.error(error);
          });
    }

    
    getensbynum(num) {
        this.getens();
        let url = 'http://app-aead2b86-a4bb-4a14-9b97-cd0d09d78ae6.cleverapps.io/uniteEnseignement'
        return fetch(url + num)
            .then(response => response.json())
            .then(data => {
                this.posts2 = data;
                console.log(this.posts2);
            });
        
    }

    getens(){
        let t1 = document.getElementById("md");
        t1.classList.toggle("is-active");
    }
    getens2(){
        let t1 = document.getElementById("md");
        t1.classList.remove("is-active");
        //t1.classList.toggle("is-clipped ");
    }

    render() {
        return (
            
            <section class="container">
            <div class="container has-text-centered">
                  
                  <h1 class="title">
                  <br></br>
                          Unité Enseignant :
                      </h1>
                      </div>
            <br></br><br></br>
              <div class="columns features">
              <div class="columns is-desktop is-multiline">
              {this.posts.map(
                            (pst) =>
                <div class="column is-3">
                  <div class="card is-shady">
                    <div class="card-image">
                      <figure class="image is-4by3">
                        <img src="https://www.airtrace.ch/images/formations/icone-formation-bleu-08-maxi.png" alt="Placeholder image" class="modal-button" data-target="modal-image2"/>
                      </figure>
                    </div>
                    <div class="card-content">
                      <div class="content">
                        <h4>{pst.id.codeUe}</h4>
                        <p>{pst.designation}</p>
                        <div class="field is-grouped">
                        <p class="control">        
                       <a class="button is-link" id="showModal"  onClick={() => this.getensbynum(pst.codeUe)}><i class="fas fa-info"></i>&nbsp;Détails</a>
                        </p>
                        <p class="control">
                            <a class="button is-danger" onClick={() => this.deletefnct(pst)}><i class="fas fa-trash-alt"></i>&nbsp;Supprimer</a>
                        </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )}
                <div class="modal" id="md">
                <div class="modal-background"></div>
                <div class="modal-content">
                  <div class="card-content">
                    <div class="content">
                    <div class="message-header">
                        <p id="p1"></p>
                    </div>
                            <table class="table is-responsive is-striped is-bordered ">
                                <thead>
                                    <tr>
                                        <th class="has-text-centered is-info is-bordered">Unité enseignant</th>
                                        <th class="has-text-centered is-info is-bordered">Plus de détail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                        <td class="has-text-centered">UE 1</td>
                                        <td class="has-text-centered"></td>
                                    </tr>
                                    <tr>
                                        <td class="has-text-centered">UE</td>
                                        
                                    </tr>
                                    <tr>
                                        <td class="has-text-centered">UE</td>
                                        
                                    </tr>
                                    <tr>
                                        <td class="has-text-centered">UE</td>
                                        
                                    </tr>
                                    
                                </tbody>
                            </table>
                    </div>
                  </div>
                </div><br></br>
                    <button class="button" id="showModal" onClick={() => this.getens2()}>Close</button>
                </div>
           </div>
            </div>
        </section>
        );
    }
}