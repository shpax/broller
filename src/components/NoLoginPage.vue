<template>
  <div>
    <NavBar />
    <div class="side-pad col-12-mobile">
      <div class="col">
        <p>
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit,
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est,
          qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit,
          sed quia non numquam eius modi tempora incidunt, ut labore et dolore
          magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
          nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
          aliquid ex ea commodi consequatur? Quis autem vel eum iure
          reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae
          consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla
          pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus,
          qui blanditiis praesentium voluptatum deleniti atque corrupti, quos
          dolores et quas molestias excepturi sint, obcaecati cupiditate non
          provident, similique sunt in culpa, qui officia deserunt mollitia
          animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
          est et expedita distinctio. Nam libero tempore, cum soluta nobis est
          eligendi optio, cumque nihil impedit, quo minus id, quod maxime
          placeat, facere possimus, omnis voluptas assumenda est, omnis dolor
          repellendus. Temporibus autem quibusdam et aut officiis debitis aut
          rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint
          et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
          delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
          perferendis doloribus asperiores repellat. Sed ut perspiciatis, unde
          omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo
          enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem
          sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia
          dolor sit, amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
          ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? Quis autem vel eum iure reprehenderit, qui in ea
          voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui
          dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et
          accusamus et iusto odio dignissimos ducimus, qui blanditiis
          praesentium voluptatum deleniti atque corrupti, quos dolores et quas
          molestias excepturi sint, obcaecati cupiditate non provident,
          similique sunt in culpa, qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio,
          cumque nihil impedit, quo minus id, quod maxime placeat, facere
          possimus, omnis voluptas assumenda est, omnis dolor repellendus.
          Temporibus autem quibusdam et aut officiis debitis aut rerum
          necessitatibus saepe eveniet, ut et voluptates repudiandae sint et
          molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
          delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
          perferendis doloribus asperiores repellat.
        </p>
      </div>
      <div class="card w-75 text-center">
        <div class="card-header">
          Регестрация
        </div>
        <div class="card-body">
          <h5 class="card-title">Присоедениться к Broller Team</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <ValidationObserver v-slot="{ invalid }">
            <form @submit.prevent="onSubmit">
              <div class="form-group">
                <ValidationProvider
                  name="phone"
                  rules="required|phone"
                  v-slot="{ errors }"
                >
                  <input
                    v-model="phone"
                    v-mask="'+38 (###) ###-##-##'"
                    type="tel"
                    placeholder="Номер телефону"
                    class="form-control short-form-check"
                    id="phone"
                  />
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <button class="btn btn-primary" type="submit" :disabled="invalid">
                Присоедениться
              </button>
            </form>
          </ValidationObserver>
          <img
            src="../assets/logo.jpg"
            width="150"
            height="150"
            class="d-inline-block align-top"
            alt=""
            loading="lazy"
            style="margin-top: 20px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhoneNumber from "awesome-phonenumber";
import { extend } from "vee-validate";
import NavBar from "./NavBar";

extend("phone", {
  message() {
    return `Приклад: +38 (050) 257-11-00`;
  },
  validate(value) {
    return new Promise(resolve => {
      let phone = new PhoneNumber(value);
      resolve({ valid: phone.isValid() });
    });
  }
});

export default {
  name: "NoLoginPage",
  components: {
    NavBar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.side-pad {
  padding-left: 80px;
  padding-right: 80px;
}

.side-pad p {
  padding-top: 30px;
}

.sign-in-pad {
  border: 3px;
  padding-left: 20px;
  padding-right: 20px;
}

.card {
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 50px;
}

.form-group {
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

// Mobile version
@media (max-width: 575px) {
  .side-pad {
    padding-left: 20px;
    padding-right: 20px;
  }

  .side-pad p {
    padding-top: 10px;
  }

  .form-group {
    width: 100%;
  }
}
</style>
