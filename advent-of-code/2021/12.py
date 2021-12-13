

def dfs(graph, start):

    paths = []

    def traverse(vertex, path, visited, doubler):
        if vertex in visited:
            if doubler != "":
                return
            if doubler == "":
                doubler = vertex

        if not len(path):
            path = vertex
        else:
            path += ',' + vertex
        
        for next_vertex in graph[vertex]:
            if next_vertex == 'start':
                continue
            if next_vertex == 'end':
                path += ',end'
                paths.append(path)
            elif next_vertex in graph:
                if vertex.upper() != vertex:
                    visited.add(vertex)
                traverse(next_vertex, path, visited, doubler)
                if vertex.upper() != vertex and vertex in visited:
                    if doubler != vertex:
                        visited.remove(vertex)
             

    doubler = ''    
    visited = set()
    traverse(start, '', visited, doubler)
    return paths
    

with open('input12.txt') as f:
    lines = [x.rstrip().split('-') for x in f.readlines()]
    graph = {}
    for line in lines:
        key = line[0]
        dest = line[1]
        if key in graph:
            graph[key].append(dest)
        else:
            graph[key] = [dest]
        if dest in graph:
            graph[dest].append(key)
        else:
            graph[dest] = [key]
    
    # print("graph: ", graph)
    paths = dfs(graph, 'start')
    print("PATHS: ", len(paths))
