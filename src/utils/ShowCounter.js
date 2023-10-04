import { AppConfigurationClient } from "@azure/app-configuration";

const ShowCounter = async() => {
    const conn = 'Endpoint=https://ff-configuration.azconfig.io;Id=Kq3J;Secret=jyRIiQgBlThJtve4OnxY2ac1AOsvmIWdeenQhSatTKA=';
    const client = new AppConfigurationClient(conn);

    console.log("show counter working....");

    const lb = process.env.ASPNETCORE_ENVIRONMENT || "prod";
    
    var val = await client.getConfigurationSetting({ 
        key: ".appconfig.featureflag/demo",
        label: lb
    });

 

    const parsedValue = val.value ? JSON.parse(val.value) : null;


    if (parsedValue && parsedValue.enabled !== undefined) {
      return parsedValue.enabled;
    }
    
    return false;
  };

export default ShowCounter;
