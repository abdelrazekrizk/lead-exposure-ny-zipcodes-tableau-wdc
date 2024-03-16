(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {
        var cols = [
            { id: "county", alias: "County", dataType: tableau.dataTypeEnum.string },
            { id: "county_code", alias: "County Code", dataType: tableau.dataTypeEnum.int },
            { id: "year", alias: "Year", dataType: tableau.dataTypeEnum.int },
            { id: "zip", alias: "Zip Code", dataType: tableau.dataTypeEnum.string },
            { id: "tests", alias: "Tests", dataType: tableau.dataTypeEnum.int },
            { id: "less_than_5_mcg_dl", alias: "Less than 5 mcg/dL", dataType: tableau.dataTypeEnum.int },
            { id: "5_10_mcg_dl", alias: "5-10 mcg/dL", dataType: tableau.dataTypeEnum.int },
            { id: "10_15_mcg_dl", alias: "10 – 15 mcg/dL", dataType: tableau.dataTypeEnum.int },
            { id: "15_plus_mcg_dl", alias: "15 + mcg/dL", dataType: tableau.dataTypeEnum.int },
            { id: "total_elevated_blood_levels", alias: "Total Elevated Blood Levels", dataType: tableau.dataTypeEnum.int },
            { id: "percent", alias: "Percent", dataType: tableau.dataTypeEnum.float },
            { id: "rate_per_1000", alias: "Rate per 1,000", dataType: tableau.dataTypeEnum.float },
            { id: "zip_code_location", alias: "Zip Code Location", dataType: tableau.dataTypeEnum.geometry },
            { id: "county_location", alias: "County Location", dataType: tableau.dataTypeEnum.geometry }
        ];

        var tableSchema = {
            id: "ny_health_data",
            alias: "NY Health Data",
            columns: cols
        };

        schemaCallback([tableSchema]);
    };

    myConnector.getData = function (table, doneCallback) {
        $.getJSON("https://health.data.ny.gov/resource/d54z-enu8.json?county=Suffolk", function (resp) {
            var tableData = [];

            // Iterate over the JSON object
            for (var i = 0, len = resp.length; i < len; i++) {
                tableData.push({
                    "county": resp[i].county,
                    "county_code": resp[i].county_code,
                    "year": resp[i].year,
                    "zip": resp[i].zip,
                    "tests": resp[i].tests,
                    "less_than_5_mcg_dl": resp[i]["less_than_5_mcg/dl"],
                    "5_10_mcg_dl": resp[i]["5-10_mcg/dl"],
                    "10_15_mcg_dl": resp[i]["10–15_mcg/dl"],
                    "15_plus_mcg_dl": resp[i]["15+_mcg/dl"],
                    "total_elevated_blood_levels": resp[i].total_elevated_blood_levels,
                    "percent": resp[i].percent,
                    "rate_per_1000": resp[i]["rate_per_1_000"],
                    "zip_code_location": resp[i].zip_code_location,
                    "county_location": resp[i].county_location
                });
            }

            table.appendRows(tableData);
            doneCallback();
        });
    };

    tableau.registerConnector(myConnector);

    $(document).ready(function () {
        $("#submitButton").click(function () {
            tableau.connectionName = "NY Health Data";
            tableau.submit();
        });
    });
})();
