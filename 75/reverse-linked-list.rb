# Given the head of a singly linked list, reverse the list, and return the reversed list.

# Example 1:
# Input: head = [1,2,3,4,5]
# Output: [5,4,3,2,1]

# Example 2:
# Input: head = [1,2]
# Output: [2,1]

# Example 3:
# Input: head = []
# Output: []

# create a stack
# iterate through head until we reach the tail, adding nodes to stack as we go
# iterate through stack, making @next, the previous iteration of the stack

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {ListNode}
def reverse_list(head)
    return head if head == nil || head.next == nil
    
    current_node = head
    next_node = nil
    
    while true
        if current_node.next == nil
            current_node.next = next_node
            return current_node
        end
        prev_node = current_node.next
        current_node.next = next_node
        next_node = current_node
        current_node = prev_node
    end
end

# def reverse_list(head)
#     return head if head == nil || head.next == nil
#     stack = []
#     flag = true
#     current_node = head

#     while flag 
#         stack.push(current_node)

#         if current_node.next == nil
#             flag = false
#         else
#             current_node = current_node.next
#         end
#     end
    
#     first_node = stack.pop
#     node = stack.pop
#     first_node.next = node

#     while stack.length > 0
#         next_node = stack.pop
#         node.next = next_node
#         node = node.next
#     end

#     node.next = nil
#     return first_node
# end

# def reverse_list(head) #recursive
#     return head if head == nil || head.next == nil
#     results = reverse(head.next, head)
#     tail = results[1]
#     tail.next = nil
#     return results[0]
# end

# def reverse(head, prev_head)
#     if head.next == nil
#         head.next = prev_head
#         return [head, head.next]
#     end
#     results_arr = reverse(head.next, head)
#     current_head = results_arr[0]
#     current_tail = results_arr[1]
#     current_tail.next = prev_head
#     return [current_head, current_tail.next]
# end