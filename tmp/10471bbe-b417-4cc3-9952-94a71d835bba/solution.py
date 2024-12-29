def two_sum(nums, target):
    # Create a dictionary to store numbers and their indices
    num_to_index = {}

    # Loop through the array
    for i, num in enumerate(nums):
        # Calculate the complement of the current number
        complement = target - num

        # Check if the complement exists in the dictionary
        if complement in num_to_index:
            return [num_to_index[complement], i]
        
        # Store the current number with its index in the dictionary
        num_to_index[num] = i

    # If no solution is found (shouldn't happen as per the problem statement)
    return []

# Example Usage
nums = [2, 7, 11, 15]
target = 9
print(two_sum(nums, target))  # Output: [0, 1]
