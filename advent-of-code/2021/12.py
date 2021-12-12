

def dfs(graph, start):
    # visited = set()
    paths = []

    def traverse(vertex, path, visited):

        if vertex in visited:
            return

        if not len(path):
            path = vertex
        else:
            path += ',' + vertex
        
        for next_vertex in graph[vertex]:
            if next_vertex == 'end':
                path += ',end'
                paths.append(path)
            elif next_vertex in graph:
            # if next_vertex in graph and next_vertex not in visited:
                if vertex.upper() != vertex:
                    visited.add(vertex)
                traverse(next_vertex, path, visited)
                if vertex.upper() != vertex:
                    visited.remove(vertex)

        
    visited = set()
    traverse(start, '', visited)
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
        
        # # if the key is upper case, then there is a path pack to A
        # if key.upper() == key and dest != "end":
        #     print("key: ", key)
        #     if dest in graph:
        #         graph[dest].append(key)
        #     else:
        #         graph[dest] = [key]
    
    print("graph: ", graph)
    paths = dfs(graph, 'start')
    print("PATHS: ", paths, len(paths))
