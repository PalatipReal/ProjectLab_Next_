import Form from '../../Component/form.js'
import Head from '../../Component/head.js';
import 'bootstrap-css-only/css/bootstrap.min.css';
export default function Course () {
  return (
    <div>
      <Head title="Education - Project Lab" />
      <Form >
        <div class="jumbotron text-center">
          <h1>Course Page</h1>
          <p>Resize this responsive page to see the effect!</p> 
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <h3>Column 1</h3>
              <p>Lorem ipsum dolor..</p>
            </div>
            <div class="col-sm-4">
              <h3>Column 2</h3>
              <p>Lorem ipsum dolor..</p>
            </div>
            <div class="col-sm-4">
              <h3>Column 3</h3> 
              <p>Lorem ipsum dolor..</p>
            </div>
          </div>
        </div>
      </Form>
    </div>
      );
    
  }