import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [clc, setBasicCalculate] = useState("");
  const [clcda, setDaCalculate] = useState("");
  const [clcea, setEaCalculate] = useState("");
  const [clcp, setProfessionalCalc] = useState("");


  return (
    <>
      <section className="income-tax-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
                <div className="inc-wrapper">
                  <h2>Income Tax Calculator</h2>
                  <div className="table-responsive">
                    <table className="table table-striped table-hover custom-table">
                      <tbody>
                        <tr>
                          <th className="w-50">Basic Salary * 12</th>
                          <td className="w-25"><input type="text" className="form-control" value={clc} onChange={(e)=>setBasicCalculate(e.target.value)} /></td>
                          <td className="w-25">{clc*12}</td>
                        </tr>
                        <tr>
                          <th className="w-50">DA * 12</th>
                          <td className="w-25"><input type="text" className="form-control" value={clcda} onChange={(e)=>setDaCalculate(e.target.value)} /></td>
                          <td className="w-25">{clcda*12}</td>
                        </tr>
                        <tr>
                          <th className="w-50">EA * 12</th>
                          <td className="w-25"><input type="text" className="form-control" value={clcea} onChange={(e)=>setEaCalculate(e.target.value)} /></td>
                          <td className="w-25">{clcea*12}</td>
                        </tr>
                        <tr>
                          <th className="w-50">Gross Salary (A + B + C)</th>
                          <td className="w-25">&nbsp;</td>
                          <td className="w-25">{clc*12 + clcda*12 + clcea*12}</td>
                        </tr>
                        <tr>
                          <th className="w-50">Professional Tax</th>
                          <td className="w-25">&nbsp;</td>
                          <td className="w-25"><input type="text" className="form-control" value={clcp} onChange={(e)=>setProfessionalCalc(e.target.value)} /></td>
                        </tr>
                        <tr>
                          <th className="w-50">Net income</th>
                          <td className="w-25">&nbsp;</td>
                          <td className="w-25">= {(clc*12 + clcda*12 + clcea*12) - clcp}</td>
                        </tr>
                        <tr>
                          <th className="w-50">Tax (10%)</th>
                          <td className="w-25">&nbsp;</td>
                          <td className="w-25">= {((clc*12 + clcda*12 + clcea*12) - clcp)*10/100}</td>
                        </tr>
                        <tr>
                          <th className="w-50">Save Income (Income - Tax)</th>
                          <td className="w-25">&nbsp;</td>
                          <td className="w-25">= {((clc*12 + clcda*12 + clcea*12) - clcp)-(((clc*12 + clcda*12 + clcea*12) - clcp)*10/100)}</td>
                        </tr>
                        
                      </tbody>
                    </table>
                  </div>
                </div>
            </div> 
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
