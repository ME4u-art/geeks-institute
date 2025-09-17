def get_full_name(**kwargs):
    full_name =" ".join(kwargs.values())
    print(f"Your full name is: {full_name}")

get_full_name(first ="hicham",middle_name="you",last_name="me")