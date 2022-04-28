import { Button, Card } from "@mui/material";
import React, { useState } from "react";
import readXlsxFile from "read-excel-file";
import axios from "axios";
import DrawerLayout from "../../layout/DrawerLayout";

var excelData = [];

const BulkTransfer = () => {
  const [file, setFile] = useState();
  function click() {
    console.log("function has been called");
    console.log("excelData", excelData, "*");
    var outputArray = [];
    excelData = excelData[0];
    for (let i = 1; i < excelData.length; i++) {
      var currObj = {};
      currObj[excelData[0][0]] = excelData[i][0];
      currObj[excelData[0][1]] = excelData[i][1];
      currObj[excelData[0][2]] = excelData[i][2];
      currObj[excelData[0][3]] = excelData[i][3];
      outputArray.push(currObj);
    }
    console.log(outputArray, "hii");

    axios
      .post(" https://9faf-103-39-240-5.ngrok.io/bulktransfer", {
        outputArray,
      })
      .then((response) => {
        console.log("Success:", response);
        alert("ExcelData Successfully uploaded");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Something Error");
      });
  }

  return (
    <>
      <DrawerLayout>
        <div className="bulkDiv">
          <Card className="bulkClass">
            <p>Bulk Order</p>
            <div className="bulkOrder">
              <div>
                <div className="Upload">
                  <input
                    type="file"
                    className="input"
                    accept=".xls,.xlsx"
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                      console.log(file);
                      readXlsxFile(e.target.files[0]).then((rows) => {
                        console.log("rows", rows);
                        console.log("excelData #", excelData);
                        excelData.push(rows);

                        console.log("excelData #", excelData);
                      });
                    }}
                  />
                  <Button onClick={click}>Upload</Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </DrawerLayout>
    </>
  );
};

export default BulkTransfer;
