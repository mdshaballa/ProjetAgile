import { Component } from '@stencil/core';


@Component({
    tag: 'spi-profile',
    styleUrl: 'spi-profile.css'
})
export class SpiProfile {
    
    render() {
        return (

        <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">





            <div class="columns is-vcentered">
            <div class="column is-6">
            <div class="card">

  <div class="card-content">
    <div class="media">
      <div class="media-left">
      <figure class="avatar ">
            <img src="../assets/icon/ava.png"/>
     </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">Admin Admin</p>
        <p class="subtitle is-6">@admin</p>
      </div>
    </div>

    <div class="content">
      XXX
      XXX 
     <br></br>
     XXX
      
      <br/>
      
    </div>
  </div>
</div>
             </div>

             <div class="column is-6 is-offset-1 ">

             <h1 class="title is-2">
             Bonjour Admin
                        </h1> <br></br>

                        
                        <h2 class="subtitle is-4">
                        Dans cette interface, vous pouvez créer une formation, une unité d'enseignement et un élement constitutif. 
                        </h2> 

                        <br/>

                        <div class="field is-grouped has-text-centered">
  <p class="control">
  <a class="button is-medium is-primary is-outlined">
                             Formation
                             </a>
  </p>
  <p class="control">
  <a class="button is-medium is-primary is-outlined">
                            Unité d'enseignement
                             </a>
  </p>
  <p class="control">
  <a class="button is-medium is-primary is-outlined">
                            Element Constitutif
                             </a>
  </p>
</div>
                       
                           
 
                        
             </div>


            </div>
            </div>
        </div>
        </section>
        
        );
    }
}