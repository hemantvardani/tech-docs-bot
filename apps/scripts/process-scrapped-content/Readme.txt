// writing a script which take files form input folder(which is at same level) and generate files in output folder(at same level).
// input files are the scrapped content from the docs of GrapesJs in markdown
// where each file in output folder will be given as pinecone to index the record(so length of files should be less then what a record can hold on pinecone)
// Max input of a record is 2000 tokens (for same side try completing below 1800 token)

Flow:
1. Get all files from output folder, for each file repeat below 
2. for each file content, ask openai api to provide content to be given to pinecone to index (
    here, openai is being used to clean the data, 
    as in data a lot of unnecessary info is there- like links. 
    LLM should not short or summary the content. 
    But to clean the unnessary things and provide again in better markdown if possible. 
    also segregately content intelligently so that it can be fed to pinecone.(respecting context and token limit of a record in pinecone)
    So, llm is asked to do the intelligent work here.
    also for each content, it should provide meta-data (some keys are url-path, title , summary, content, flow(if possible,like : "auth> settings > providers > Github ") ), more keys also can be there.
3. then for each, we will save into a output file


