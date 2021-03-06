## Classes

<dl>
<dt><a href="#InCache">InCache</a></dt>
<dd></dd>
</dl>

## Constants

<dl>
<dt><a href="#SAVE_MODE">SAVE_MODE</a></dt>
<dd></dd>
</dl>

<a name="InCache"></a>

## InCache
**Kind**: global class  

* [InCache](#InCache)
    * [new InCache([opts])](#new_InCache_new)
    * _instance_
        * [.load([path])](#InCache+load) ⇒ <code>Promise</code>
        * [.save([path])](#InCache+save) ⇒ <code>Promise</code>
        * [.setConfig([opts])](#InCache+setConfig)
        * [.getConfig()](#InCache+getConfig) ⇒ <code>\*</code>
        * [.set(key, value, [opts])](#InCache+set) ⇒ [<code>record</code>](#InCache..record) \| <code>\*</code>
        * [.get(key, [onlyValue])](#InCache+get) ⇒ [<code>record</code>](#InCache..record) \| <code>\*</code> \| <code>null</code> \| <code>undefined</code>
        * [.remove(key, [silent])](#InCache+remove)
        * [.removeFrom(key, where)](#InCache+removeFrom)
        * [.removeExpired()](#InCache+removeExpired) ⇒ <code>Array</code>
        * [.addTo(key, value)](#InCache+addTo) ⇒ [<code>record</code>](#InCache..record) \| <code>undefined</code>
        * [.prependTo(key, value)](#InCache+prependTo) ⇒ [<code>record</code>](#InCache..record) \| <code>undefined</code>
        * [.updateIn(key, value, where)](#InCache+updateIn)
        * [.bulkSet(records, [silent])](#InCache+bulkSet) ⇒ <code>Object</code> \| <code>undefined</code>
        * [.bulkRemove(keys, [silent])](#InCache+bulkRemove)
        * [.clean(key)](#InCache+clean)
        * [.all(asObject)](#InCache+all) ⇒ <code>\*</code>
        * [.count()](#InCache+count) ⇒ <code>Number</code>
        * [.expired(key)](#InCache+expired) ⇒ <code>boolean</code>
        * [.clear()](#InCache+clear)
        * [.has(key)](#InCache+has) ⇒ <code>boolean</code>
        * [.destroy(...args)](#InCache+destroy)
        * [.stats()](#InCache+stats) ⇒ <code>Object</code>
        * [.on(eventName, callback)](#InCache+on) ⇒ [<code>InCache</code>](#InCache)
        * [.suspendEvent(...eventName)](#InCache+suspendEvent) ⇒ [<code>InCache</code>](#InCache)
        * [.resumeEvent(...eventName)](#InCache+resumeEvent) ⇒ [<code>InCache</code>](#InCache)
        * [.suspendEvents()](#InCache+suspendEvents) ⇒ [<code>InCache</code>](#InCache)
        * [.resumeEvents()](#InCache+resumeEvents) ⇒ [<code>InCache</code>](#InCache)
        * <del>[.onRemoved(callback)](#InCache+onRemoved)</del>
        * <del>[.onCreated(callback)](#InCache+onCreated)</del>
        * <del>[.onUpdated(callback)](#InCache+onUpdated)</del>
        * ["beforeSet" (key, value)](#InCache+event_beforeSet)
        * ["set" (key, record)](#InCache+event_set)
        * ["create" (key, record)](#InCache+event_create)
        * ["update" (key, record)](#InCache+event_update)
        * ["beforeRemove" (key)](#InCache+event_beforeRemove)
        * ["remove" (key)](#InCache+event_remove)
        * ["beforeBulkSet" (records)](#InCache+event_beforeBulkSet)
        * ["bulkSet" (records)](#InCache+event_bulkSet)
        * ["beforeBulkRemove" (keys)](#InCache+event_beforeBulkRemove)
        * ["bulkRemove" (keys)](#InCache+event_bulkRemove)
        * ["expired" (keys)](#InCache+event_expired)
        * ["beforeLoad" (me)](#InCache+event_beforeLoad)
        * ["load" (err, me)](#InCache+event_load)
        * ["beforeSave" (me)](#InCache+event_beforeSave)
        * ["save" (err, me)](#InCache+event_save)
        * ["change" (by)](#InCache+event_change)
        * ["exceed" (diff)](#InCache+event_exceed)
    * _static_
        * [.isRecord(obj)](#InCache.isRecord) ⇒ <code>boolean</code>
    * _inner_
        * [~record](#InCache..record) : <code>Object</code>
        * <del>[~removedCallback](#InCache..removedCallback) : <code>function</code></del>
        * <del>[~createdCallback](#InCache..createdCallback) : <code>function</code></del>
        * <del>[~updatedCallback](#InCache..updatedCallback) : <code>function</code></del>

<a name="new_InCache_new"></a>

### new InCache([opts])
Create instance

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[opts]</td><td><code>Object</code></td><td></td><td><p>configuration object</p>
</td>
    </tr><tr>
    <td>[opts.maxAge]</td><td><code>number</code></td><td><code>0</code></td><td><p>max age in milliseconds. If 0 not expire. (overwritable by <code>set</code>)</p>
</td>
    </tr><tr>
    <td>[opts.expires]</td><td><code>Date</code> | <code>string</code></td><td></td><td><p>a Date for expiration. (overwrites <code>opts.maxAge</code>, overwritable by <code>set</code>)</p>
</td>
    </tr><tr>
    <td>[opts.silent]</td><td><code>boolean</code></td><td><code>false</code></td><td><p>if true no event will be triggered. (overwritable by <code>set</code>)</p>
</td>
    </tr><tr>
    <td>[opts.deleteOnExpires]</td><td><code>boolean</code></td><td><code>true</code></td><td><p>if false, the record will not be deleted after expiry. (overwritable by <code>set</code>)</p>
</td>
    </tr><tr>
    <td>[opts.clone]</td><td><code>boolean</code></td><td><code>false</code></td><td><p>if true, the object will be cloned before to put it in storage. (overwritable by <code>set</code>)</p>
</td>
    </tr><tr>
    <td>[opts.preserve]</td><td><code>boolean</code></td><td><code>false</code></td><td><p>if true, you will no longer be able to update the record once created. (overwritable by <code>set</code>)</p>
</td>
    </tr><tr>
    <td>[opts.maxRecordNumber]</td><td><code>number</code></td><td><code>0</code></td><td><p>the maximum of record number of the cache, if exceeded some records will be deleted. If 0 is disabled</p>
</td>
    </tr><tr>
    <td>[opts.autoLoad]</td><td><code>boolean</code></td><td><code>true</code></td><td><p>load cache from disk when instance is created.</p>
</td>
    </tr><tr>
    <td>[opts.autoSave]</td><td><code>boolean</code></td><td><code>false</code></td><td><p>if true saves cache in disk when the process is terminated.</p>
</td>
    </tr><tr>
    <td>[opts.autoSaveMode]</td><td><code>string</code></td><td><code>&quot;terminate&quot;</code></td><td><p>there are 2 modes -&gt; &quot;terminate&quot;: saves before the process is terminated (server only). &quot;timer&quot;: every n seconds checks for new changes and save on disk.</p>
</td>
    </tr><tr>
    <td>[opts.autoSavePeriod]</td><td><code>number</code></td><td><code>5</code></td><td><p>period in seconds to check for new changes to save on disk. Works only if <code>opts.autoSaveMode</code> is set to &#39;timer&#39; mode.</p>
</td>
    </tr><tr>
    <td>[opts.filePath]</td><td><code>string</code> | <code>*</code></td><td><code>&quot;.incache&quot;</code></td><td><p>cache file path or key. If is a falsy value, <code>load</code> and <code>save</code> will always be solved</p>
</td>
    </tr><tr>
    <td>[opts.storeName]</td><td><code>string</code></td><td></td><td><p>store name</p>
</td>
    </tr><tr>
    <td>[opts.share]</td><td><code>boolean</code></td><td><code>false</code></td><td><p>if true, use global object as storage</p>
</td>
    </tr><tr>
    <td>[opts.autoRemovePeriod]</td><td><code>number</code></td><td><code>0</code></td><td><p>period in seconds to remove expired records. When set, the records will be removed only on check, when 0 it won&#39;t run</p>
</td>
    </tr><tr>
    <td>[opts.nullIfNotFound]</td><td><code>boolean</code></td><td><code>false</code></td><td><p>calling <code>get</code> if the key is not found returns <code>null</code>. If false returns <code>undefined</code></p>
</td>
    </tr><tr>
    <td>[opts.save]</td><td><code>boolean</code></td><td><code>false</code></td><td><p><strong>deprecated:</strong> if true saves cache in disk when the process is terminated. Use <code>autoSave</code> instead.</p>
</td>
    </tr><tr>
    <td>[opts.global]</td><td><code>Object</code></td><td></td><td><p><strong>deprecated:</strong> global record configuration</p>
</td>
    </tr><tr>
    <td>[opts.global.silent]</td><td><code>boolean</code></td><td><code>false</code></td><td><p><strong>deprecated:</strong> if true no event will be triggered, use <code>silent</code> instead</p>
</td>
    </tr><tr>
    <td>[opts.global.life]</td><td><code>number</code></td><td><code>0</code></td><td><p><strong>deprecated:</strong> max age in seconds. If 0 not expire, use <code>maxAge</code> instead</p>
</td>
    </tr>  </tbody>
</table>

<a name="InCache+load"></a>

### inCache.load([path]) ⇒ <code>Promise</code>
Load cache from disk

**Kind**: instance method of [<code>InCache</code>](#InCache)  
**Emits**: [<code>beforeLoad</code>](#InCache+event_beforeLoad), [<code>load</code>](#InCache+event_load)  
**Since**: 6.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[path]</td><td><code>string</code></td><td><code>&quot;opts.filePath&quot;</code></td><td><p>file path or key (browser scenario)</p>
</td>
    </tr>  </tbody>
</table>

<a name="InCache+save"></a>

### inCache.save([path]) ⇒ <code>Promise</code>
Save cache into disk

**Kind**: instance method of [<code>InCache</code>](#InCache)  
**Emits**: [<code>beforeSave</code>](#InCache+event_beforeSave), [<code>save</code>](#InCache+event_save)  
**Since**: 6.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[path]</td><td><code>string</code></td><td><code>&quot;opts.filePath&quot;</code></td><td><p>file path or key (browser scenario)</p>
</td>
    </tr>  </tbody>
</table>

<a name="InCache+setConfig"></a>

### inCache.setConfig([opts])
Set configuration

**Kind**: instance method of [<code>InCache</code>](#InCache)  
**See**: [constructor](constructor) for further information  
**Since**: 3.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[opts]</td><td><code>Object</code></td><td><p>configuration object</p>
</td>
    </tr>  </tbody>
</table>

<a name="InCache+getConfig"></a>

### inCache.getConfig() ⇒ <code>\*</code>
Get configuration

**Kind**: instance method of [<code>InCache</code>](#InCache)  
<a name="InCache+set"></a>

### inCache.set(key, value, [opts]) ⇒ [<code>record</code>](#InCache..record) \| <code>\*</code>
Set/update record

**Kind**: instance method of [<code>InCache</code>](#InCache)  
**Emits**: [<code>beforeSet</code>](#InCache+event_beforeSet), [<code>create</code>](#InCache+event_create), [<code>update</code>](#InCache+event_update), [<code>set</code>](#InCache+event_set)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>key</td><td><code>string</code></td><td></td><td></td>
    </tr><tr>
    <td>value</td><td><code>*</code></td><td></td><td></td>
    </tr><tr>
    <td>[opts]</td><td><code>Object</code></td><td></td><td><p>options object</p>
</td>
    </tr><tr>
    <td>[opts.silent]</td><td><code>boolean</code></td><td><code>false</code></td><td><p>if true no event will be triggered. (overwrites global configuration)</p>
</td>
    </tr><tr>
    <td>[opts.maxAge]</td><td><code>number</code></td><td><code>0</code></td><td><p>max age in milliseconds. If 0 not expire. (overwrites global configuration)</p>
</td>
    </tr><tr>
    <td>[opts.clone]</td><td><code>boolean</code></td><td><code>false</code></td><td><p>if true, the object will be cloned before to put it in storage. (overwrites global configuration)</p>
</td>
    </tr><tr>
    <td>[opts.preserve]</td><td><code>boolean</code></td><td><code>false</code></td><td><p>if true, you will no longer be able to update the record once created. (overwrites global configuration)</p>
</td>
    </tr><tr>
    <td>[opts.expires]</td><td><code>Date</code> | <code>string</code></td><td></td><td><p>a Date for expiration. (overwrites global configuration and <code>opts.maxAge</code>)</p>
</td>
    </tr><tr>
    <td>[opts.deleteOnExpires]</td><td><code>boolean</code></td><td><code>true</code></td><td><p>if false, the record will not be deleted after expiry. (overwrites global configuration)</p>
</td>
    </tr><tr>
    <td>[opts.life]</td><td><code>number</code></td><td><code>0</code></td><td><p><strong>deprecated:</strong> max age in seconds. If 0 not expire. (overwrites global configuration)</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
inCache.set('my key', 'my value');inCache.set('my object', {a: 1, b: 2});inCache.set('my boolean', true, {maxAge: 2000}); // Expires after 2 seconds
```
<a name="InCache+get"></a>

### inCache.get(key, [onlyValue]) ⇒ [<code>record</code>](#InCache..record) \| <code>\*</code> \| <code>null</code> \| <code>undefined</code>
Get record by key

**Kind**: instance method of [<code>InCache</code>](#InCache)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>key</td><td><code>string</code></td><td></td><td></td>
    </tr><tr>
    <td>[onlyValue]</td><td><code>boolean</code></td><td><code>true</code></td><td><p>if false get InCache record</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
inCache.get('my key');
```
<a name="InCache+remove"></a>

### inCache.remove(key, [silent])
Delete a record

**Kind**: instance method of [<code>InCache</code>](#InCache)  
**Emits**: [<code>beforeRemove</code>](#InCache+event_beforeRemove), [<code>remove</code>](#InCache+event_remove)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>key</td><td><code>string</code></td><td></td><td></td>
    </tr><tr>
    <td>[silent]</td><td><code>boolean</code></td><td><code>false</code></td><td><p>if true no event will be triggered</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
inCache.remove('my key');
```
<a name="InCache+removeFrom"></a>

### inCache.removeFrom(key, where)
Given a key that has value like an array removes key(s) if `where` is satisfied

**Kind**: instance method of [<code>InCache</code>](#InCache)  
**Since**: 3.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>key</td><td><code>string</code></td>
    </tr><tr>
    <td>where</td><td><code>*</code></td>
    </tr>  </tbody>
</table>

**Example**  
```js
inCache.set('myArray', ['hello', 'world']);inCache.removeFrom('myArray', 'hello'); //-> ['world'];
```
<a name="InCache+removeExpired"></a>

### inCache.removeExpired() ⇒ <code>Array</code>
Remove expired records

**Kind**: instance method of [<code>InCache</code>](#InCache)  
**Returns**: <code>Array</code> - expired keys  
**Since**: 4.1.0  
**Example**  
```js
inCache.set('my key 1', 'my value');inCache.set('my key 2', 'my value', {maxAge: 1000});inCache.set('my key 3', 'my value', {maxAge: 1500});setTimeout(()=>{     inCache.removeExpired();     inCache.all(); //-> [{key: 'my key 1', value: 'my value'}]}, 2000)
```
<a name="InCache+addTo"></a>

### inCache.addTo(key, value) ⇒ [<code>record</code>](#InCache..record) \| <code>undefined</code>
Given a key that has value like an array adds value to end of array

**Kind**: instance method of [<code>InCache</code>](#InCache)  
**Since**: 3.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>key</td><td><code>string</code></td>
    </tr><tr>
    <td>value</td><td><code>*</code></td>
    </tr>  </tbody>
</table>

**Example**  
```js
inCache.set('myArray', ['hello', 'world']);inCache.addTo('myArray', 'ciao'); //-> ['hello', 'world', 'ciao'];
```
<a name="InCache+prependTo"></a>

### inCache.prependTo(key, value) ⇒ [<code>record</code>](#InCache..record) \| <code>undefined</code>
Given a key that has value like an array adds value to beginning of array

**Kind**: instance method of [<code>InCache</code>](#InCache)  
**Since**: 3.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>key</td><td><code>string</code></td>
    </tr><tr>
    <td>value</td><td><code>*</code></td>
    </tr>  </tbody>
</table>

**Example**  
```js
inCache.set('myArray', ['hello', 'world']);inCache.prependTo('myArray', 'ciao'); //-> ['ciao', 'hello', 'world'];
```
<a name="InCache+updateIn"></a>

### inCache.updateIn(key, value, where)
Given a key that has value like an array updates key(s) if `where` is satisfied

**Kind**: instance method of [<code>InCache</code>](#InCache)  
**Since**: 3.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>key</td><td><code>string</code></td>
    </tr><tr>
    <td>value</td><td><code>*</code></td>
    </tr><tr>
    <td>where</td><td><code>*</code></td>
    </tr>  </tbody>
</table>

**Example**  
```js
inCache.set('myArray', ['hello', 'world']);inCache.updateIn('myArray', 'ciao', 'hello'); //-> ['ciao', 'world'];inCache.set('myArray', [{a: 1, b: 2, c: 3], {b: 2, c: 3}, {b: 4, e: 5});inCache.updateIn('myArray', {z: 0, x: 0}, {b: 2, c: 3}); //-> [{z: 0, x: 0}, {z: 0, x: 0}, {b: 4, e: 5}];
```
<a name="InCache+bulkSet"></a>

### inCache.bulkSet(records, [silent]) ⇒ <code>Object</code> \| <code>undefined</code>
Set/update multiple records. This method not trigger any event.

**Kind**: instance method of [<code>InCache</code>](#InCache)  
**Emits**: [<code>beforeBulkSet</code>](#InCache+event_beforeBulkSet), [<code>bulkSet</code>](#InCache+event_bulkSet)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>records</td><td><code>Array</code></td><td></td><td><p>e.g. [{key: foo1, value: bar1},{key: foo2, value: bar2}]</p>
</td>
    </tr><tr>
    <td>[silent]</td><td><code>boolean</code></td><td><code>false</code></td><td><p>if true no event will be triggered</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
inCache.bulkSet([     {key: 'my key 1', value: 'my value 1'},     {key: 'my key 2', value: 'my value 2'},     {key: 'my key 3', value: 'my value 3'},     {key: 'my key 4', value: 'my value 4'}]);// orinCache.bulkSet(['hello','world']);
```
<a name="InCache+bulkRemove"></a>

### inCache.bulkRemove(keys, [silent])
Delete multiple records

**Kind**: instance method of [<code>InCache</code>](#InCache)  
**Emits**: [<code>beforeBulkRemove</code>](#InCache+event_beforeBulkRemove), [<code>bulkRemove</code>](#InCache+event_bulkRemove)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>keys</td><td><code>Array</code></td><td></td><td><p>an array of keys</p>
</td>
    </tr><tr>
    <td>[silent]</td><td><code>boolean</code></td><td><code>false</code></td><td><p>if true no event will be triggered</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
inCache.bulkRemove(['key1', 'key2', 'key3']);
```
<a name="InCache+clean"></a>

### inCache.clean(key)
Delete multiple records that contain the passed keyword

**Kind**: instance method of [<code>InCache</code>](#InCache)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>key</td><td><code>string</code></td><td><p>a string that is relative to a group of keys</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
inCache.set('/api/users/foo', 'Mario Rossi');inCache.set('/api/users/bar', 'Antonio Bianchi');inCache.clean('/api/users');
```
<a name="InCache+all"></a>

### inCache.all(asObject) ⇒ <code>\*</code>
Fetch all records

**Kind**: instance method of [<code>InCache</code>](#InCache)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Default</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>asObject</td><td><code>false</code></td>
    </tr>  </tbody>
</table>

<a name="InCache+count"></a>

### inCache.count() ⇒ <code>Number</code>
Returns total of records in storage

**Kind**: instance method of [<code>InCache</code>](#InCache)  
**Since**: 6.0.0  
<a name="InCache+expired"></a>

### inCache.expired(key) ⇒ <code>boolean</code>
Check if record is expired

**Kind**: instance method of [<code>InCache</code>](#InCache)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>key</td><td><code>string</code></td>
    </tr>  </tbody>
</table>

<a name="InCache+clear"></a>

### inCache.clear()
Remove all records

**Kind**: instance method of [<code>InCache</code>](#InCache)  
<a name="InCache+has"></a>

### inCache.has(key) ⇒ <code>boolean</code>
Check if key exists

**Kind**: instance method of [<code>InCache</code>](#InCache)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>key</td><td><code>string</code></td>
    </tr>  </tbody>
</table>

**Example**  
```js
inCache.has('my key');
```
<a name="InCache+destroy"></a>

### inCache.destroy(...args)
Alias of `remove`

**Kind**: instance method of [<code>InCache</code>](#InCache)  
**Since**: 4.1.1  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>...args</td>
    </tr>  </tbody>
</table>

<a name="InCache+stats"></a>

### inCache.stats() ⇒ <code>Object</code>
Returns stats of storage

**Kind**: instance method of [<code>InCache</code>](#InCache)  
**Since**: 6.3.0  
<a name="InCache+on"></a>

### inCache.on(eventName, callback) ⇒ [<code>InCache</code>](#InCache)
Adds listener to instance

**Kind**: instance method of [<code>InCache</code>](#InCache)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>eventName</td><td><code>string</code></td><td><p>event name</p>
</td>
    </tr><tr>
    <td>callback</td><td><code>function</code></td><td><p>callback</p>
</td>
    </tr>  </tbody>
</table>

<a name="InCache+suspendEvent"></a>

### inCache.suspendEvent(...eventName) ⇒ [<code>InCache</code>](#InCache)
Suspends firing of the named event(s).

**Kind**: instance method of [<code>InCache</code>](#InCache)  
**Since**: 6.6.0  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>...eventName</td><td><code>string</code></td><td><p>multiple event names to suspend</p>
</td>
    </tr>  </tbody>
</table>

<a name="InCache+resumeEvent"></a>

### inCache.resumeEvent(...eventName) ⇒ [<code>InCache</code>](#InCache)
Resumes firing of the named event(s).

**Kind**: instance method of [<code>InCache</code>](#InCache)  
**Since**: 6.6.0  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>...eventName</td><td><code>string</code></td><td><p>multiple event names to resume.</p>
</td>
    </tr>  </tbody>
</table>

<a name="InCache+suspendEvents"></a>

### inCache.suspendEvents() ⇒ [<code>InCache</code>](#InCache)
Suspends all events.

**Kind**: instance method of [<code>InCache</code>](#InCache)  
**Since**: 6.6.0  
<a name="InCache+resumeEvents"></a>

### inCache.resumeEvents() ⇒ [<code>InCache</code>](#InCache)
Resume all events.

**Kind**: instance method of [<code>InCache</code>](#InCache)  
**Since**: 6.6.0  
<a name="InCache+onRemoved"></a>

### <del>inCache.onRemoved(callback)</del>
***Deprecated***

Triggered when a record has been deleted. **Deprecated since 5.0.0:** use `on('remove', callback)` instead.

**Kind**: instance method of [<code>InCache</code>](#InCache)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>callback</td><td><code><a href="#InCache..removedCallback">removedCallback</a></code></td><td><p>callback function</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
inCache.onRemoved((key)=>{     console.log('removed', key);});
```
<a name="InCache+onCreated"></a>

### <del>inCache.onCreated(callback)</del>
***Deprecated***

Triggered when a record has been created. **Deprecated since 5.0.0:** use `on('create', callback)` instead

**Kind**: instance method of [<code>InCache</code>](#InCache)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>callback</td><td><code><a href="#InCache..createdCallback">createdCallback</a></code></td><td><p>callback function</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
inCache.onCreated((key, record)=>{     console.log('created', key, record);});
```
<a name="InCache+onUpdated"></a>

### <del>inCache.onUpdated(callback)</del>
***Deprecated***

Triggered when a record has been updated. **Deprecated since 5.0.0:** use `on('update', callback)` instead

**Kind**: instance method of [<code>InCache</code>](#InCache)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>callback</td><td><code><a href="#InCache..updatedCallback">updatedCallback</a></code></td><td><p>callback function</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
inCache.onUpdated((key, record)=>{     console.log('updated', key, record);});
```
<a name="InCache+event_beforeSet"></a>

### "beforeSet" (key, value)
Triggered before set

**Kind**: event emitted by [<code>InCache</code>](#InCache)  
**Since**: 5.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>key</td><td><code>string</code></td><td><p>key</p>
</td>
    </tr><tr>
    <td>value</td><td><code>string</code></td><td><p>value</p>
</td>
    </tr>  </tbody>
</table>

<a name="InCache+event_set"></a>

### "set" (key, record)
Triggered after set

**Kind**: event emitted by [<code>InCache</code>](#InCache)  
**Since**: 5.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>key</td><td><code>string</code></td><td><p>key</p>
</td>
    </tr><tr>
    <td>record</td><td><code><a href="#InCache..record">record</a></code></td><td><p>record object</p>
</td>
    </tr>  </tbody>
</table>

<a name="InCache+event_create"></a>

### "create" (key, record)
Triggered after create the record

**Kind**: event emitted by [<code>InCache</code>](#InCache)  
**Since**: 5.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>key</td><td><code>string</code></td><td><p>key of record</p>
</td>
    </tr><tr>
    <td>record</td><td><code><a href="#InCache..record">record</a></code></td><td><p>record object</p>
</td>
    </tr>  </tbody>
</table>

<a name="InCache+event_update"></a>

### "update" (key, record)
Triggered after update the record

**Kind**: event emitted by [<code>InCache</code>](#InCache)  
**Since**: 5.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>key</td><td><code>string</code></td><td><p>key of record</p>
</td>
    </tr><tr>
    <td>record</td><td><code><a href="#InCache..record">record</a></code></td><td><p>record object</p>
</td>
    </tr>  </tbody>
</table>

<a name="InCache+event_beforeRemove"></a>

### "beforeRemove" (key)
Triggered before remove the record

**Kind**: event emitted by [<code>InCache</code>](#InCache)  
**Since**: 5.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>key</td><td><code>string</code></td><td><p>key of record to be removed</p>
</td>
    </tr>  </tbody>
</table>

<a name="InCache+event_remove"></a>

### "remove" (key)
Triggered after record has been removed

**Kind**: event emitted by [<code>InCache</code>](#InCache)  
**Since**: 5.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>key</td><td><code>string</code></td><td><p>key of record</p>
</td>
    </tr>  </tbody>
</table>

<a name="InCache+event_beforeBulkSet"></a>

### "beforeBulkSet" (records)
Triggered before bulk set

**Kind**: event emitted by [<code>InCache</code>](#InCache)  
**Since**: 5.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>records</td><td><code>Array</code></td><td><p>array of objects</p>
</td>
    </tr>  </tbody>
</table>

<a name="InCache+event_bulkSet"></a>

### "bulkSet" (records)
Triggered after bulk set

**Kind**: event emitted by [<code>InCache</code>](#InCache)  
**Since**: 5.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>records</td><td><code>Array</code></td><td><p>array of objects</p>
</td>
    </tr>  </tbody>
</table>

<a name="InCache+event_beforeBulkRemove"></a>

### "beforeBulkRemove" (keys)
Triggered before remove the records

**Kind**: event emitted by [<code>InCache</code>](#InCache)  
**Since**: 5.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>keys</td><td><code>Array</code></td><td><p>array of keys to be removed</p>
</td>
    </tr>  </tbody>
</table>

<a name="InCache+event_bulkRemove"></a>

### "bulkRemove" (keys)
Triggered after records have been removed

**Kind**: event emitted by [<code>InCache</code>](#InCache)  
**Since**: 5.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>keys</td><td><code>Array</code></td><td><p>array of keys removed</p>
</td>
    </tr>  </tbody>
</table>

<a name="InCache+event_expired"></a>

### "expired" (keys)
Triggered when records are expired and `opts.autoRemovePeriod` is set

**Kind**: event emitted by [<code>InCache</code>](#InCache)  
**Since**: 5.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>keys</td><td><code>Array</code></td><td><p>array of keys expired</p>
</td>
    </tr>  </tbody>
</table>

<a name="InCache+event_beforeLoad"></a>

### "beforeLoad" (me)
Triggered before load (only if `autoLoad` is false)

**Kind**: event emitted by [<code>InCache</code>](#InCache)  
**Since**: 6.4.0  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>me</td><td><code><a href="#InCache">InCache</a></code></td>
    </tr>  </tbody>
</table>

<a name="InCache+event_load"></a>

### "load" (err, me)
Triggered after load invocation

**Kind**: event emitted by [<code>InCache</code>](#InCache)  
**Since**: 6.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>err</td><td><code>null</code> | <code>string</code></td><td><p>error message, if no errors occurred is null</p>
</td>
    </tr><tr>
    <td>me</td><td><code><a href="#InCache">InCache</a></code></td><td></td>
    </tr>  </tbody>
</table>

<a name="InCache+event_beforeSave"></a>

### "beforeSave" (me)
Triggered before save

**Kind**: event emitted by [<code>InCache</code>](#InCache)  
**Since**: 6.4.0  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>me</td><td><code><a href="#InCache">InCache</a></code></td>
    </tr>  </tbody>
</table>

<a name="InCache+event_save"></a>

### "save" (err, me)
Triggered after save invocation

**Kind**: event emitted by [<code>InCache</code>](#InCache)  
**Since**: 6.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>err</td><td><code>null</code> | <code>string</code></td><td><p>error message, if no errors occurred is null</p>
</td>
    </tr><tr>
    <td>me</td><td><code><a href="#InCache">InCache</a></code></td><td></td>
    </tr>  </tbody>
</table>

<a name="InCache+event_change"></a>

### "change" (by)
Triggered when data is changed

**Kind**: event emitted by [<code>InCache</code>](#InCache)  
**Since**: 6.1.0  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>by</td><td><code>string</code></td><td><p>event called by <code>set</code>,<code>remove</code>,<code>clear</code> or <code>clean</code></p>
</td>
    </tr>  </tbody>
</table>

<a name="InCache+event_exceed"></a>

### "exceed" (diff)
Triggered when data exceed max size

**Kind**: event emitted by [<code>InCache</code>](#InCache)  
**Since**: 6.1.0  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>diff</td><td><code>number</code></td><td><p>exceeded by record number</p>
</td>
    </tr>  </tbody>
</table>

<a name="InCache.isRecord"></a>

### InCache.isRecord(obj) ⇒ <code>boolean</code>
Check if object is a InCache~record

**Kind**: static method of [<code>InCache</code>](#InCache)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>obj</td><td><code><a href="#InCache..record">record</a></code></td><td><p>InCache record</p>
</td>
    </tr>  </tbody>
</table>

<a name="InCache..record"></a>

### InCache~record : <code>Object</code>
InCache record

**Kind**: inner typedef of [<code>InCache</code>](#InCache)  
**Properties**

<table>
  <thead>
    <tr>
      <th>Name</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>id</td><td><code>string</code></td><td><p>uuid</p>
</td>
    </tr><tr>
    <td>isNew</td><td><code>boolean</code></td><td><p>indicates if is a new record</p>
</td>
    </tr><tr>
    <td>isPreserved</td><td><code>boolean</code></td><td><p>indicates if record will no longer be editable once created</p>
</td>
    </tr><tr>
    <td>toDelete</td><td><code>boolean</code></td><td><p>indicates if record will be deleted after expiry</p>
</td>
    </tr><tr>
    <td>hits</td><td><code>number</code></td><td><p>how many times it has been used</p>
</td>
    </tr><tr>
    <td>lastHit</td><td><code>Date</code> | <code>null</code></td><td><p>last usage</p>
</td>
    </tr><tr>
    <td>createdOn</td><td><code>Date</code> | <code>null</code></td><td><p>creation date</p>
</td>
    </tr><tr>
    <td>updatedOn</td><td><code>Date</code> | <code>null</code></td><td><p>update date</p>
</td>
    </tr><tr>
    <td>expiresOn</td><td><code>Date</code> | <code>null</code></td><td><p>expiry date</p>
</td>
    </tr><tr>
    <td>value</td><td><code>*</code></td><td><p>record value</p>
</td>
    </tr>  </tbody>
</table>

<a name="InCache..removedCallback"></a>

### <del>InCache~removedCallback : <code>function</code></del>
***Deprecated***

onRemoved callback

**Kind**: inner typedef of [<code>InCache</code>](#InCache)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>key</td><td><code>string</code></td><td><p>key of record removed</p>
</td>
    </tr>  </tbody>
</table>

<a name="InCache..createdCallback"></a>

### <del>InCache~createdCallback : <code>function</code></del>
***Deprecated***

onCreated callback

**Kind**: inner typedef of [<code>InCache</code>](#InCache)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>key</td><td><code>string</code></td><td><p>key of record created</p>
</td>
    </tr><tr>
    <td>record</td><td><code><a href="#InCache..record">record</a></code></td><td><p>record object</p>
</td>
    </tr>  </tbody>
</table>

<a name="InCache..updatedCallback"></a>

### <del>InCache~updatedCallback : <code>function</code></del>
***Deprecated***

onUpdated callback

**Kind**: inner typedef of [<code>InCache</code>](#InCache)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>key</td><td><code>string</code></td><td><p>key of record updated</p>
</td>
    </tr><tr>
    <td>record</td><td><code><a href="#InCache..record">record</a></code></td><td><p>record object</p>
</td>
    </tr>  </tbody>
</table>

<a name="SAVE_MODE"></a>

## SAVE_MODE
**Kind**: global constant  

* [SAVE_MODE](#SAVE_MODE)
    * [.TERMINATE](#SAVE_MODE.TERMINATE)
    * [.TIMER](#SAVE_MODE.TIMER)

<a name="SAVE_MODE.TERMINATE"></a>

### SAVE_MODE.TERMINATE
**Kind**: static property of [<code>SAVE_MODE</code>](#SAVE_MODE)  
<a name="SAVE_MODE.TIMER"></a>

### SAVE_MODE.TIMER
**Kind**: static property of [<code>SAVE_MODE</code>](#SAVE_MODE)  
