<script setup>
import { ref, reactive, computed } from 'vue'

let ctrId = 0;
class Joke {
    constructor(line1 = '', line2 = '', id = 0) {

        this.line1 = line1;
        this.line2 = line2;

        if (id == 0) {
            ctrId ++;
            this.id = ctrId;
        }
        else {
            this.id = id;
            if (ctrId < id) {
                ctrId = id
            }
        }
       
    }
}

const jokesList = ref([
    new Joke('How do construction workers party?', 'They raise the roof.'),
    new Joke(
        'Why do front end developers eat lunch alone?',
        `Because they don't know how to join tables.`
    ),
    new Joke(
        'What did the grape say when it was stepped on?',
        'Nothing, it just let out a little wine.'
    ),
]);

//const message = ref('Hello world')

</script>

<template>

  <div class="row">

    <div class="col-xl-6">
      <div class="accordion" id="accordionExample" >
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Lorem ipsum dolor sit amet
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> 
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-xl-6">

     <div class="card">
        <div class="card-body">
            
            <h5 class="card-title">Makes a joke here</h5>

            <label for="inputText" class="p">Line 1</label>
            <div class="col-sm-12">
              <input type="text" class="form-control">
            </div>

            <br/>

            <label for="inputText" class="p">Line 2</label>
            <div class="col-sm-12">
              <input type="text" class="form-control">
            </div>

            <br/>
            
            <button type="button" class="btn btn-primary btn-sm"  v-on:click="item.push()">Save</button>

        </div>
      </div>  
    </div>

  </div>

</template>