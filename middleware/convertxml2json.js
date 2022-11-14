const xml2js = require('xml2js');

// XML string to be parsed to JSON
const xml = `<?xml version="1.0" standalone="yes"?>
<config timestamp="2022-10-13T00:00:00Z">
  <title>Coffee Shop - Campaign</title>
  <screen>Piccadilly Circus</screen>
  <generator>DOOH.com DELIVER</generator>
  <dropdown>
    <d code="408463989" schedule="s1" />
    <d code="408677622" schedule="s2" />
    <d code="408750020" schedule="s3" />
  </dropdown>
  <schedules>
    <s s="s1" asset_id="takeover_1">
		<caption>Good Morning!</caption>
    </s>
    <s s="s2" asset_id="takeover_2">
		<caption>Good Afternoon!</caption>
    </s>
    <s s="s3" asset_id="takeover_3">
		<caption>Good Evening!</caption>
    </s>
  </schedules>
  <assets>
    <asset id="takeover_1" path="morning.png" />
    <asset id="takeover_2" path="afternoon.png" />
    <asset id="takeover_3" path="evening.png" />
  </assets>
</config>`;

// convert XML to JSON
xml2js.parseString(xml, (err, result) => {
  if (err) {
    throw err;
  }

  // `result` is a JavaScript object
  // convert it to a JSON string
  const json = JSON.stringify(result, null, 4);

  // log JSON string
  console.log(json);
});
